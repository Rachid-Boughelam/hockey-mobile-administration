import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../service/article.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  articles: Article[] = [];
  displayDialog: boolean = false;
  editingArticle: boolean = false;
  selectedArticleId: number | null = null;

  newArticle: Article = {
    id: null,
    title: '',
    description: '',
    date: '',
    image: ''
  };

  selectedFile: File | null = null;
  previewImage: string | ArrayBuffer | null = null;

  constructor(
    private articleService: ArticleService,
    private http: HttpClient // <== pour Cloudinary
  ) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  showDialog(): void {
    this.editingArticle = false;
    this.newArticle = { id: null, title: '', description: '', date: '', image: '' };
    this.displayDialog = true;
  }

  onSubmit(): void {
    if (this.newArticle.title && this.newArticle.description && this.newArticle.date) {
      // Si un fichier est sélectionné, nous faisons l'upload vers Cloudinary
      if (this.selectedFile) {
        const cloudData = new FormData();
        cloudData.append('file', this.selectedFile);  // L'image sélectionnée
        cloudData.append('upload_preset', 'ml_default');  // Prends le nom du preset d'upload non signé
        cloudData.append('cloud_name', 'dqjcaoezq');  // Ton cloud_name Cloudinary
  
        // Envoi de l'image vers Cloudinary
        this.http.post<any>('https://api.cloudinary.com/v1_1/dqjcaoezq/image/upload', cloudData).subscribe({
          next: (response) => {
            // Récupération de l'URL de l'image depuis Cloudinary
            const imageUrl = response.secure_url;
  
            // Création de l'objet Article avec l'URL de l'image
            const articleToSend: Article = {
              title: this.newArticle.title,
              description: this.newArticle.description,
              date: this.newArticle.date,
              image: imageUrl, // L'URL Cloudinary de l'image
              id: null
            };
  
            // Envoi de l'article au backend
            this.articleService.addArticle(articleToSend).subscribe({
              next: (data) => {
                // Ajout de l'article au début du tableau
                this.articles.unshift(data);
                this.resetForm(); // Réinitialisation du formulaire
              },
              error: (error) => {
                console.error("Erreur backend après upload Cloudinary", error);
              }
            });
          },
          error: (err) => {
            console.error("Erreur upload vers Cloudinary", err);
            console.error("Détails de l'erreur:", err.error);
          }
        });
      } else {
        // Si aucune image n'est sélectionnée, on envoie l'article sans image
        const articleToSend: Article = {
          title: this.newArticle.title,
          description: this.newArticle.description,
          date: this.newArticle.date,
          image: '', // Pas d'image
          id: null
        };
  
        // Envoi de l'article au backend
        this.articleService.addArticle(articleToSend).subscribe({
          next: (data) => {
            // Ajout de l'article au début du tableau
            this.articles.unshift(data);
            this.resetForm(); // Réinitialisation du formulaire
          },
          error: (error) => {
            console.error("Erreur backend", error);
          }
        });
      }
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }
  
  deleteArticle(article: Article): void {
    if (confirm(`Voulez-vous vraiment supprimer l'article "${article.title}" ?`)) {
      this.articleService.deleteArticle(article.id!).subscribe(
        () => {
          this.articles = this.articles.filter(a => a.id !== article.id);
        },
        (error) => {
          console.error("Erreur lors de la suppression de l'article", error);
        }
      );
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = e => this.previewImage = reader.result;
      reader.readAsDataURL(this.selectedFile);
    }
  }

  resetForm(): void {
    this.newArticle = { id: null, title: '', description: '', date: '', image: '' };
    this.selectedFile = null;
    this.previewImage = null;
    this.displayDialog = false;
  }
}

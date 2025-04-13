import { Routes } from '@angular/router';
import { ArticleFormComponent } from './article-form/article-form.component';
import { HomeComponent } from './home/home.component';
import { ResultFormComponent } from './result-form/result-form.component';
import { TeamFormComponent } from './team-form/team-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'article', component: ArticleFormComponent},
    {path: 'result', component: ResultFormComponent},
    {path: 'team', component: TeamFormComponent},
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'graphic-cards',
    component: GraphicCardsComponent,
    children: [{ path: ':id/comments', component: CommentsComponent }],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

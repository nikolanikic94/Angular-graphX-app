import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
import { GraphicCardListComponent } from './graphic-cards/graphic-card-list/graphic-card-list.component';
import { GraphicCardListItemComponent } from './graphic-cards/graphic-card-list-item/graphic-card-list-item.component';
import { PaginationComponent } from './graphic-cards/pagination/pagination.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentsListItemComponent } from './comments/comments-list-item/comments-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GraphicCardsComponent,
    GraphicCardListComponent,
    GraphicCardListItemComponent,
    PaginationComponent,
    CommentsComponent,
    CommentsListComponent,
    CommentsListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

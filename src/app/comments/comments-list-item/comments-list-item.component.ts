import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/Comment.model';

@Component({
  selector: 'app-comments-list-item',
  templateUrl: './comments-list-item.component.html',
  styleUrls: ['./comments-list-item.component.css'],
})
export class CommentsListItemComponent implements OnInit {
  @Input() comment: Comment;
  constructor() {}

  ngOnInit(): void {}
}

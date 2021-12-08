import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GraphicService } from '../graphic-cards/service/graphic.service';
import { Comment } from '../model/Comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  count: number;
  comments: Comment[];
  commentForm: FormGroup;

  constructor(
    private service: GraphicService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(3)]],
      text: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((response) => {
      let id = this.route.snapshot.paramMap.get('id');
      this.service.getComments(Number(id)).subscribe((response) => {
        this.count = response.$count;
        this.comments = response.$results;
      });
    });
  }

  onSubmit() {
    let com = new Comment(this.commentForm.value);
    let date = new Date().toJSON();
    com.$cards = Number(this.route.snapshot.paramMap.get('id'));
    com.$date = date;
    
    this.service.postComment(com).subscribe((response) => {});
    this.service.getComments(com.$cards).subscribe((response) => {
      this.count = response.$count;
      this.comments = response.$results;
    });
    this.commentForm.reset();
  }
}

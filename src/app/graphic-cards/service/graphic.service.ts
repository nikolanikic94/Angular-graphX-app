import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from 'src/app/model/Comment.model';
import { CommentSearch } from 'src/app/model/CommentSearch.model';
import { GraphicCard } from 'src/app/model/GraphicCard.model';
import { GraphicCardSearch } from 'src/app/model/GraphicCardSearch.model';

@Injectable({
  providedIn: 'root',
})
export class GraphicService {
  url = 'http://localhost:3000/api/cards';

  constructor(private http: HttpClient) {}

  getAll(params): Observable<GraphicCardSearch> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('page', (params.page && JSON.stringify(params.page)) || '')
          .set(
            'pageSize',
            (params.pageSize && JSON.stringify(params.pageSize)) || ''
          ),
      };

      return this.http
        .get(this.url, queryParams)
        .pipe(map((response) => new GraphicCardSearch(response)));
    }
  }

  getComments(id: number): Observable<CommentSearch> {
    return this.http
      .get(`${this.url}/${id}/comments`)
      .pipe(map((response) => new CommentSearch(response)));
  }

  updateGrade(card: GraphicCard) {
    return this.http
      .put(`${this.url}/${card.id}`, card)
      .pipe(map((response) => new GraphicCard(response)));
  }

  postComment(comment: Comment) {
    return this.http
      .post(`${this.url}/${comment.$cards}/comments`, comment)
      .pipe(map((response) => new GraphicCard(response)));
  }
}

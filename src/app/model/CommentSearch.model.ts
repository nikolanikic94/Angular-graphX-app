import { Comment } from './Comment.model';

export class CommentSearch {
  private count: number;
  private results: Comment[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results = obj && obj.results.map((com) => new Comment(com));
  }

  /**
   * Getter $count
   * @return {number}
   */
  public get $count(): number {
    return this.count;
  }

  /**
   * Getter $results
   * @return {Comment[]}
   */
  public get $results(): Comment[] {
    return this.results;
  }

  /**
   * Setter $count
   * @param {number} value
   */
  public set $count(value: number) {
    this.count = value;
  }
}

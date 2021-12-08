export class Comment {
  private cards: number;
  private text: string;
  private author: string;
  private date: string;
  private _id: number;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.cards = (obj && obj.cards) || null;
    this.text = (obj && obj.text) || '';
    this.author = (obj && obj.author) || '';
    this.date = (obj && obj.date) || '';
  }

  /**
   * Getter $cards
   * @return {number}
   */
  public get $cards(): number {
    return this.cards;
  }

  /**
   * Getter $text
   * @return {string}
   */
  public get $text(): string {
    return this.text;
  }

  /**
   * Getter $author
   * @return {string}
   */
  public get $author(): string {
    return this.author;
  }

  /**
   * Getter $date
   * @return {string}
   */
  public get $date(): string {
    return this.date;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Setter $cards
   * @param {number} value
   */
  public set $cards(value: number) {
    this.cards = value;
  }

  /**
   * Setter $text
   * @param {string} value
   */
  public set $text(value: string) {
    this.text = value;
  }

  /**
   * Setter $author
   * @param {string} value
   */
  public set $author(value: string) {
    this.author = value;
  }

  /**
   * Setter $date
   * @param {string} value
   */
  public set $date(value: string) {
    this.date = value;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }
}

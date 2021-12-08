export class GraphicCard {
  private _id: number;
  private title: string;
  private subtitle: string;
  private description: string;
  private image: string;
  private grade: number;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || null;
    this.title = (obj && obj.title) || '';
    this.subtitle = (obj && obj.subtitle) || '';
    this.description = (obj && obj.description) || '';
    this.image = (obj && obj.image) || '';
    this.grade = (obj && obj.grade) || 0;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter $title
   * @return {string}
   */
  public get $title(): string {
    return this.title;
  }

  /**
   * Getter $subtitle
   * @return {string}
   */
  public get $subtitle(): string {
    return this.subtitle;
  }

  /**
   * Getter $description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $image
   * @return {string}
   */
  public get $image(): string {
    return this.image;
  }

  /**
   * Getter $grade
   * @return {number}
   */
  public get $grade(): number {
    return this.grade;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter $title
   * @param {string} value
   */
  public set $title(value: string) {
    this.title = value;
  }

  /**
   * Setter $subtitle
   * @param {string} value
   */
  public set $subtitle(value: string) {
    this.subtitle = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $image
   * @param {string} value
   */
  public set $image(value: string) {
    this.image = value;
  }

  /**
   * Setter $grade
   * @param {number} value
   */
  public set $grade(value: number) {
    this.grade = value;
  }
}

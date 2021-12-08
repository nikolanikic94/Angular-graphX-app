import { GraphicCard } from './GraphicCard.model';

export class GraphicCardSearch {
  private count: number;
  private results: GraphicCard[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj && obj.results.map((card) => new GraphicCard(card))) || [];
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
   * @return {GraphicCard[]}
   */
  public get $results(): GraphicCard[] {
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

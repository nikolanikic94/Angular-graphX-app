import { Component, OnInit } from '@angular/core';
import { GraphicCard } from '../model/GraphicCard.model';
import { GraphicService } from './service/graphic.service';

@Component({
  selector: 'app-graphic-cards',
  templateUrl: './graphic-cards.component.html',
  styleUrls: ['./graphic-cards.component.css'],
})
export class GraphicCardsComponent implements OnInit {
  count: number;
  graphicCards: GraphicCard[];

  parameters = {
    page: 1,
    pageSize: 5,
  };

  constructor(private service: GraphicService) {}

  ngOnInit(): void {
    this.refreshCards();
  }

  refreshCards() {
    this.service.getAll(this.parameters).subscribe((response) => {
      this.count = response.$count;
      this.graphicCards = response.$results;
    });
  }

  updatePagination(value) {
    this.parameters.pageSize = value.pageSize;
    this.parameters.page = value.page;

    this.refreshCards();
  }
}

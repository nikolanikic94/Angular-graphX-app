import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GraphicCard } from 'src/app/model/GraphicCard.model';

@Component({
  selector: 'app-graphic-card-list',
  templateUrl: './graphic-card-list.component.html',
  styleUrls: ['./graphic-card-list.component.css'],
})
export class GraphicCardListComponent implements OnInit {
  @Input() graphicCards: GraphicCard[];
  @Input() collectionSize: number;
  @Output() paginationEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updatePagination(value) {
    this.paginationEmitter.emit(value);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { GraphicCard } from 'src/app/model/GraphicCard.model';
import { GraphicService } from '../service/graphic.service';

@Component({
  selector: 'app-graphic-card-list-item',
  templateUrl: './graphic-card-list-item.component.html',
  styleUrls: ['./graphic-card-list-item.component.css'],
})
export class GraphicCardListItemComponent implements OnInit {
  @Input() card: GraphicCard;

  constructor(private service: GraphicService) {}

  ngOnInit(): void {}

  updateGrade(grade: number) {
    this.card.$grade = grade;
    this.service.updateGrade(this.card).subscribe((response) => {});
  }
}

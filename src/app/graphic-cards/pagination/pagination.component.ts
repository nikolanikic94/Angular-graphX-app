import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() collectionSize: number;
  page: number = 1;
  pageSize: number = 5;
  @Output() paginationEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  updatePagination(value) {
    this.pageSize = value;
    this.paginationEmitter.emit({ pageSize: this.pageSize, page: this.page });
  }

  changePage(value) {
    this.page += value;
    this.paginationEmitter.emit({ page: this.page, pageSize: this.pageSize });
  }
}

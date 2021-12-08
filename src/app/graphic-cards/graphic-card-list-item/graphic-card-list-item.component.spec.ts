import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardListItemComponent } from './graphic-card-list-item.component';

describe('GraphicCardListItemComponent', () => {
  let component: GraphicCardListItemComponent;
  let fixture: ComponentFixture<GraphicCardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicCardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

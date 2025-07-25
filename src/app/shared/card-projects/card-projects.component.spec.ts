import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectsComponent } from './card-projects.component';

describe('CardProjectsComponent', () => {
  let component: CardProjectsComponent;
  let fixture: ComponentFixture<CardProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

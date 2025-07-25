import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAboutMeComponent } from './card-about-me.component';

describe('CardAboutMeComponent', () => {
  let component: CardAboutMeComponent;
  let fixture: ComponentFixture<CardAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

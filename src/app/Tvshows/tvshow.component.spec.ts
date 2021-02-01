import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { tvshowService } from '../services/tvshowservice';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { tvshowComponent } from './tvshow.component';

describe('tvshowComponent', () => {
  let component: tvshowComponent;
  let fixture: ComponentFixture<tvshowComponent>;

  beforeEach(() => {
    const tvshowServiceStub = () => ({
      tvshowsGet: () => ({ subscribe: f => f({}) })
    });
    const routerStub = () => ({ navigateByUrl: arg => ({}) });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [tvshowComponent],
      providers: [
        { provide: tvshowService, useFactory: tvshowServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(tvshowComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`resultArray has default value`, () => {
    expect(component.resultArray).toEqual([]);
  });

  it(`ratingArray has default value`, () => {
    expect(component.ratingArray).toEqual([]);
  });

  

  it(`genres has default value`, () => {
    expect(component.genres).toEqual([
      `Drama`,
      `Action`,
      `Thriller`,
      `Science-Fiction`,
      `Crime`,
      `Horror`,
      `Romance`,
      `Adventure`,
      `Espionage`,
      `Mystery`,
      `Supernatural`,
      `Fantasy`,
      `Family`,
      `Anime`,
      `Comedy`,
      `History`,
      `Medical`,
      `Legal`,
      `Music`,
      `Western`,
      `War`,
      `Sports`
    ]);
  });

});

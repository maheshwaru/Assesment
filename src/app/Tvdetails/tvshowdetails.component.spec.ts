import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { tvshowService } from '../services/tvshowservice';
import { ActivatedRoute } from '@angular/router';
import { tvshowDetailsComponent } from './tvshowdetails.component';

describe('tvshowDetailsComponent', () => {
  let component: tvshowDetailsComponent;
  let fixture: ComponentFixture<tvshowDetailsComponent>;

  beforeEach(() => {
    const tvshowServiceStub = () => ({
      tvshowsGet: () => ({ subscribe: f => f({}) })
    });
    const activatedRouteStub = () => ({ snapshot: { params: { id: {} } } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [tvshowDetailsComponent],
      providers: [
        { provide: tvshowService, useFactory: tvshowServiceStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(tvshowDetailsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`resultArray has default value`, () => {
    expect(component.resultArray).toEqual([]);
  });

});

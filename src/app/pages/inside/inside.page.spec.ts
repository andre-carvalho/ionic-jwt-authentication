import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidePage } from './inside.page';

describe('InsidePage', () => {
  let component: InsidePage;
  let fixture: ComponentFixture<InsidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

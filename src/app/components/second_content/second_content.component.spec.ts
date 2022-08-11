/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Second_contentComponent } from './second_content.component';

describe('Second_contentComponent', () => {
  let component: Second_contentComponent;
  let fixture: ComponentFixture<Second_contentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Second_contentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Second_contentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPagePage } from './reddit-page.page';

describe('RedditPagePage', () => {
  let component: RedditPagePage;
  let fixture: ComponentFixture<RedditPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

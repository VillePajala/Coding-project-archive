import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsitemPage } from './newsitem.page';

describe('NewsitemPage', () => {
  let component: NewsitemPage;
  let fixture: ComponentFixture<NewsitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

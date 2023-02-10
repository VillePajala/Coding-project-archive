import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopoverPage } from './home-popover.page';

// Popover -toiminallisuus oli hieman haastava ja säädin sitä aika paljon ja kaikkialla
// ennen kuin sain sen toimimaan. Sen takia täällä näyttäsi olevan esimerkiksi
// HomePopoverPage -import, jota ei löydy, mutta en uskalla ottaa tuota nyt poiskaan kun homma kuitenkin toimii

describe('HomePopoverPage', () => {
  let component: HomePopoverPage;
  let fixture: ComponentFixture<HomePopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

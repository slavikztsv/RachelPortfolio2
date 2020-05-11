import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGalleryItemDetailsComponent } from './home-gallery-item-details.component';

describe('HomeGalleryItemDetailsComponent', () => {
  let component: HomeGalleryItemDetailsComponent;
  let fixture: ComponentFixture<HomeGalleryItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGalleryItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGalleryItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGalleryItemComponent } from './home-gallery-item.component';

describe('HomeGalleryItemComponent', () => {
  let component: HomeGalleryItemComponent;
  let fixture: ComponentFixture<HomeGalleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGalleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

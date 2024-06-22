import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewsComponent } from './home-views.component';

describe('HomeViewsComponent', () => {
  let component: HomeViewsComponent;
  let fixture: ComponentFixture<HomeViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

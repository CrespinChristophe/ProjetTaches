import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListertacheComponent } from './listertache.component';

describe('ListertacheComponent', () => {
  let component: ListertacheComponent;
  let fixture: ComponentFixture<ListertacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListertacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListertacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

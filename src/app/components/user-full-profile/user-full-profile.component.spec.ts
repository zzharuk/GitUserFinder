import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFullProfileComponent } from './user-full-profile.component';

describe('UserFullProfileComponent', () => {
  let component: UserFullProfileComponent;
  let fixture: ComponentFixture<UserFullProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFullProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFullProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

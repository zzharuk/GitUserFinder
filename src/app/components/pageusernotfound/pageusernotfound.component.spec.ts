import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageusernotfoundComponent } from './pageusernotfound.component';

describe('PageusernotfoundComponent', () => {
  let component: PageusernotfoundComponent;
  let fixture: ComponentFixture<PageusernotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageusernotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageusernotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

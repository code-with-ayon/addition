import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterWithNgrxComponent } from './my-counter-with-ngrx.component';

describe('MyCounterWithNgrxComponent', () => {
  let component: MyCounterWithNgrxComponent;
  let fixture: ComponentFixture<MyCounterWithNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCounterWithNgrxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCounterWithNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEventComponent } from './get-event.component';

describe('GetEventComponent', () => {
  let component: GetEventComponent;
  let fixture: ComponentFixture<GetEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEventComponent]
    });
    fixture = TestBed.createComponent(GetEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetplayerComponent } from './getplayer.component';

describe('GetplayerComponent', () => {
  let component: GetplayerComponent;
  let fixture: ComponentFixture<GetplayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetplayerComponent]
    });
    fixture = TestBed.createComponent(GetplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

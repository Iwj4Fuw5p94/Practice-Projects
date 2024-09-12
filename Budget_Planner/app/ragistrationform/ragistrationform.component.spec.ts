import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagistrationformComponent } from './ragistrationform.component';

describe('RagistrationformComponent', () => {
  let component: RagistrationformComponent;
  let fixture: ComponentFixture<RagistrationformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RagistrationformComponent]
    });
    fixture = TestBed.createComponent(RagistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

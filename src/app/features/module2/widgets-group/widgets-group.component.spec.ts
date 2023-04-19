import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsGroupComponent } from './widgets-group.component';

describe('WidgetsGroupComponent', () => {
  let component: WidgetsGroupComponent;
  let fixture: ComponentFixture<WidgetsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

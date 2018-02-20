import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpFormBuilderComponent } from './sp-form-builder.component';

describe('SpFormBuilderComponent', () => {
  let component: SpFormBuilderComponent;
  let fixture: ComponentFixture<SpFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

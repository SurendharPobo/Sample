import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringCheckComponent } from './string-check.component';

describe('StringCheckComponent', () => {
  let component: StringCheckComponent;
  let fixture: ComponentFixture<StringCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

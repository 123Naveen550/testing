import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassstyleComponent } from './classstyle.component';

describe('ClassstyleComponent', () => {
  let component: ClassstyleComponent;
  let fixture: ComponentFixture<ClassstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

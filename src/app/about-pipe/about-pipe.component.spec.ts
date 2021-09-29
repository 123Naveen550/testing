import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPipeComponent } from './about-pipe.component';

describe('AboutPipeComponent', () => {
  let component: AboutPipeComponent;
  let fixture: ComponentFixture<AboutPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

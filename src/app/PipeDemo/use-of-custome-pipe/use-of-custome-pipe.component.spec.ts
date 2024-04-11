import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseOfCustomePipeComponent } from './use-of-custome-pipe.component';

describe('UseOfCustomePipeComponent', () => {
  let component: UseOfCustomePipeComponent;
  let fixture: ComponentFixture<UseOfCustomePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseOfCustomePipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseOfCustomePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

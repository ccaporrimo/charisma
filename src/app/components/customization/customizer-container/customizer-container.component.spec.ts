import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizerContainerComponent } from './customizer-container.component';

describe('CustomizerContainerComponent', () => {
  let component: CustomizerContainerComponent;
  let fixture: ComponentFixture<CustomizerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizerContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

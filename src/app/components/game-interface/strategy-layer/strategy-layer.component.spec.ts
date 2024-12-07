import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyLayerComponent } from './strategy-layer.component';

describe('StrategyLayerComponent', () => {
  let component: StrategyLayerComponent;
  let fixture: ComponentFixture<StrategyLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyLayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategyLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

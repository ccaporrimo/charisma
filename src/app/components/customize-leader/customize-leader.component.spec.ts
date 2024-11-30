import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeLeaderComponent } from './customize-leader.component';

describe('CustomizeLeaderComponent', () => {
  let component: CustomizeLeaderComponent;
  let fixture: ComponentFixture<CustomizeLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizeLeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomizeLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

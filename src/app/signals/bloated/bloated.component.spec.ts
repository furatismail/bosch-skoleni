import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloatedComponent } from './bloated.component';

describe('BloatedComponent', () => {
  let component: BloatedComponent;
  let fixture: ComponentFixture<BloatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

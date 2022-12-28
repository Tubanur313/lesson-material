import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatElementsComponent } from './mat-elements.component';

describe('MatElementsComponent', () => {
  let component: MatElementsComponent;
  let fixture: ComponentFixture<MatElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

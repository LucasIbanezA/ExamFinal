import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreacionAvisosComponent } from './creacion-avisos.component';

describe('CreacionAvisosComponent', () => {
  let component: CreacionAvisosComponent;
  let fixture: ComponentFixture<CreacionAvisosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CreacionAvisosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreacionAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

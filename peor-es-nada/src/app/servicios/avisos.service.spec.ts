import { TestBed } from '@angular/core/testing';

import { AvisosServicio } from './avisos.service';

describe('AvisosService', () => {
  let service: AvisosServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisosServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

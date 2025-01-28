import { TestBed } from '@angular/core/testing';

import { FormatoFechaPipeService } from './formato-fecha-pipe.service';

describe('FormatoFechaPipeService', () => {
  let service: FormatoFechaPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatoFechaPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

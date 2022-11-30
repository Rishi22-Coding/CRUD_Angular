import { TestBed } from '@angular/core/testing';

import { ConcourcedataService } from './concourcedata.service';

describe('ConcourcedataService', () => {
  let service: ConcourcedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcourcedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FillProjectsDataService } from './fill-projects-data.service';

describe('FillProjectsDataService', () => {
  let service: FillProjectsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillProjectsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

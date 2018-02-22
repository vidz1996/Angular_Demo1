import { TestBed, inject } from '@angular/core/testing';

import { GetJsonDataService } from './get-json-data.service';

describe('GetJsonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetJsonDataService]
    });
  });

  it('should be created', inject([GetJsonDataService], (service: GetJsonDataService) => {
    expect(service).toBeTruthy();
  }));
});

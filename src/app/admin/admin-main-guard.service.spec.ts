import { TestBed, inject } from '@angular/core/testing';

import { AdminMainGuardService } from './admin-main-guard.service';

describe('AdminMainGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminMainGuardService]
    });
  });

  it('should be created', inject([AdminMainGuardService], (service: AdminMainGuardService) => {
    expect(service).toBeTruthy();
  }));
});

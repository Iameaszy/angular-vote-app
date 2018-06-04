import { TestBed, inject } from '@angular/core/testing';

import { AdminMainAuthService } from './admin-main-auth.service';

describe('AdminMainAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminMainAuthService]
    });
  });

  it('should be created', inject([AdminMainAuthService], (service: AdminMainAuthService) => {
    expect(service).toBeTruthy();
  }));
});

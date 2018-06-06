import { TestBed, inject } from '@angular/core/testing';
import { AdminGuardService } from './admin-guard.service';

describe('AdminMainGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuardService],
    });
  });

  it(
    'should be created',
    inject([AdminGuardService], (service:AdminGuardService) => {
      expect(service).toBeTruthy();
    }),
  );
});

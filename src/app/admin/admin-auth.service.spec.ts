import { TestBed, inject } from '@angular/core/testing';
import { AdminAuthService } from './admin-auth.service';


describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthService]
    });
  });

  it('should be created', inject([AdminAuthService], (service: AdminAuthService) => {
    expect(service).toBeTruthy();
  }));
});

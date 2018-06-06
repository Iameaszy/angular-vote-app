import { TestBed, inject } from '@angular/core/testing';
import { MainAuthService } from './main-auth.service';


describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainAuthService]
    });
  });

  it('should be created', inject([MainAuthService], (service: MainAuthService) => {
    expect(service).toBeTruthy();
  }));
});

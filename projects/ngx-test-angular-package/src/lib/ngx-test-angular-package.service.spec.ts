import { TestBed } from '@angular/core/testing';

import { NgxTestAngularPackageService } from './ngx-test-angular-package.service';

describe('NgxTestAngularPackageService', () => {
  let service: NgxTestAngularPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTestAngularPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

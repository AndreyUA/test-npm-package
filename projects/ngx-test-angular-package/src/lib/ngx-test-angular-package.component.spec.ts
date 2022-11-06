import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTestAngularPackageComponent } from './ngx-test-angular-package.component';

describe('NgxTestAngularPackageComponent', () => {
  let component: NgxTestAngularPackageComponent;
  let fixture: ComponentFixture<NgxTestAngularPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTestAngularPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTestAngularPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LeaveloginGuard } from './leavelogin.guard';

describe('LeaveloginGuard', () => {
  let guard: LeaveloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NotaccessGuard } from './notaccess.guard';

describe('NotaccessGuard', () => {
  let guard: NotaccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotaccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

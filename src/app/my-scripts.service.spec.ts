import { TestBed } from '@angular/core/testing';

import { MyScriptsService } from './my-scripts.service';

describe('MyScriptsService', () => {
  let service: MyScriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyScriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { SalesInvoiceService } from './sales-invoice.service';

describe('SalesInvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesInvoiceService]
    });
  });

  it('should be created', inject([SalesInvoiceService], (service: SalesInvoiceService) => {
    expect(service).toBeTruthy();
  }));
});

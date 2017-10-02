import { Injectable } from '@angular/core';
import {SalesInvoice} from "../models/sales-invoice";
import {SALES_INVOICES} from "../mocks/sales-invoice-mock";

@Injectable()
export class SalesInvoiceService {

  getSalesInvoices(): Promise<SalesInvoice[]>{
    return Promise.resolve(SALES_INVOICES);
  }

  getSalesInvoicesCustomerDetail(id: number): Promise<SalesInvoice[]>{
    return this.getSalesInvoices()
      .then(salesInvoices => {
        return salesInvoices.filter(obj => {
          if (obj.customer.id === id) {
            return true;
          }
        });
      });
  }

}

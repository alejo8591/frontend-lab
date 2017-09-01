import { Component, OnInit } from '@angular/core';
import {SalesInvoice} from "../../models/sales-invoice";
import {Router} from "@angular/router";
import {SalesInvoiceService} from "../../services/sales-invoice.service";

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.css']
})
export class SalesInvoiceComponent implements OnInit {

  title: string = "Sales invoice";

  selectedSalesInvoice: SalesInvoice;

  salesInvoices: SalesInvoice[];

  constructor(private router: Router, private salesInvoiceService: SalesInvoiceService) {}

  getSalesInvoices() {
    this.salesInvoiceService.getSalesInvoices().then(salesInvoices => this.salesInvoices = salesInvoices);
  }

  ngOnInit(): void {
    this.getSalesInvoices();
  }

  onSelect(salesInvoice: SalesInvoice){
    this.selectedSalesInvoice = salesInvoice;
  }

  gotoDetail(): void {
    this.router.navigate(['sales-invoice/customer/detail/', this.selectedSalesInvoice.customer.id]);
  }

}

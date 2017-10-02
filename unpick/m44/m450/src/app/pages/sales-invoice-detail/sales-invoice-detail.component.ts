import { Component, OnInit } from '@angular/core';
import {SalesInvoice} from "../../models/sales-invoice";
import {SalesInvoiceService} from "../../services/sales-invoice.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-sales-invoice-detail',
  templateUrl: './sales-invoice-detail.component.html',
  styleUrls: ['./sales-invoice-detail.component.css']
})
export class SalesInvoiceDetailComponent implements OnInit {

  public salesInvoices: SalesInvoice[];

  constructor(
    private salesInvoiceService: SalesInvoiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.salesInvoiceService.getSalesInvoicesCustomerDetail(id)
        .then(salesInvoices => this.salesInvoices = salesInvoices);
    });
  }

}

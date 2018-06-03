import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../shared/payment.service';
import {Payment} from '../shared/model/payment.model';
import {Pagination} from '../shared/model/pagination.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(250)
      ]),
      transition('* => void', [
        animate(250, style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  payments: Array<Payment> = [];
  pagination: Pagination;

  selectedPayment: Payment;

  search = {
    page: '',
    query: '',
    rating: '',
  };


  constructor(private paymentService: PaymentService) {
  }

  ngOnInit() {
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getPayments(this.search)
      .subscribe(({payments, pagination}) => {
          this.pagination = pagination;
          this.payments = payments;
        }
        , () => this.payments.splice(0, this.payments.length));
  }

  reset() {
    this.search = {
      page: '',
      query: '',
      rating: '',
    };
    this.getPayments();
  }

  goToPage(page: string) {
    this.search.page = page;
    this.getPayments();
  }

  previousPage() {
    this.goToPage(
      (parseInt(this.pagination.current, 10) - 1).toString()
    );
  }

  nextPage() {
    this.goToPage(
      (parseInt(this.pagination.current, 10) + 1).toString()
    );
  }

  getArray(n: number) {
    return Array(n);
  }



}

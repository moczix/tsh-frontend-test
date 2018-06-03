import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Payment} from './model/payment.model';
import {Pagination} from './model/pagination.model';
import {Observable} from 'rxjs';


@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) {
  }


  getPayments(search: { page: string, query: string, rating: string }): Observable<{ payments: Array<Payment>, pagination: Pagination }> {
    return this.http.get<{ payments: Array<Payment>, pagination: Pagination }>(`http://test-api.kuria.tshdev.io/?${this.getQueryParams(search)}`);
  }

  private getQueryParams(params: any) {
    return Object.keys(params)
      .filter(key => params[key] !== '')
      .map(key => `&${key}=${params[key]}`)
      .reduce((a, b) => a.concat(b), '')
      .slice(1);
  }

}

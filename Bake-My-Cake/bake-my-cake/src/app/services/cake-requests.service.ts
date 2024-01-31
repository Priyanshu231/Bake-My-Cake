import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CakeOrder } from '../models/cakeorder';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CakeRequestsService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/requests';

  getAllCakeRequests(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(`${this.url}`);
  }

  saveCakeOrder(customer?: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.url}`, customer);
  }

}

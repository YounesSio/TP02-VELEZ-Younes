import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  message: string = "";

  configUrl = 'assets/bouchonProduits.json';
  
  getData(): Observable<Product[]>  {
    return this.http.get<Product[]>(this.configUrl)
  }
}

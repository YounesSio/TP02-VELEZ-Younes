import { Component, OnInit} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ServiceService } from '../service.service';
import { Product } from '../model/product';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private service: ServiceService) { }
  observable: Observable<any>;
  tabData: Array<String> = [];
  products = new Array<Product>();

  tab: Array<any> = [];

  searchName: string = "";

  subscribeMemo: Subscription = null;
  

  ngOnInit(): void {
    // Dans le chargement on ne met pas le filtre
    this.observable = this.service.getData();
    this.subscribeMemo = this.observable.subscribe(response => {
    this.tab = response;
    });
  };

  clickValidation() {
    console.log(this.service.message);
    if (this.service.message !== "") {
      this.service.getData().subscribe(response => {
        this.products = response.filter(product => product.name == this.service.message)
      });
    }
  }
  rechercherNom(event){
    console.log(event);
    // this.observable.pipe(filter(p => p.name == event)).subscribe(response => {
    //   this.tab = response;
    // });
    if (this.subscribeMemo != null)
    {
      this.subscribeMemo.unsubscribe();
    }
    this.subscribeMemo = this.observable.subscribe(response => {
      this.tab = response.filter(product => product.name == event);
    });

  }

}



import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ServiceService } from '../service.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-moteur-de-recherche',
  templateUrl: './moteur-de-recherche.component.html',
  styleUrls: ['./moteur-de-recherche.component.css']
})
export class MoteurDeRechercheComponent implements OnInit {

  constructor(private service: ServiceService) { }

  @Output()rechercher: EventEmitter<string> = new EventEmitter<string>();

  searchName: string;

  products = new Array<Product>();

  ngOnInit(): void {
    
  }

  clickValidation() {

    this.rechercher.emit(this.searchName);

    // if (this.searchName != "") {

    //  this.service.message = this.searchName;
    // }
  }

  clickReset() {
    this.searchName = "";
  }

}

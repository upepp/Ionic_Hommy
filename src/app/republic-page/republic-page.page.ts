import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-republic-page',
  templateUrl: './republic-page.page.html',
  styleUrls: ['./republic-page.page.scss'],
})
export class RepublicPagePage implements OnInit {

  constructor() { }
    dormitory = {
    name:'República Masculina',
    location : 'Rio de Janeiro, Centro',
    number_of_avaliable_dorms : 3,
    total_dorms:4,
    bathrooms:2,
    kitchen:1,
    garage_space:1,
    price: 1100,
    obs:'Republica para meninos no Centro do Rio com localidades próximas, mercados, restaurantes, bares, escolas, faculdades, etcs.preços adicionais como contas referentes à água e luz inclusas no preço.'
  }  

  ngOnInit() {
    
    
  }

}

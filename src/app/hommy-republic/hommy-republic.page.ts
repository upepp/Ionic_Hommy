import { Component, OnInit } from '@angular/core';
class Dorm {
  name: string;
  location:string;
  avaliable_dorms:boolean;
  number_of_avaliable_dorms:number;
}

@Component({
  selector: 'app-hommy-republic',
  templateUrl: './hommy-republic.page.html',
  styleUrls: ['./hommy-republic.page.scss'],
})

export class HommyRepublicPage implements OnInit{

  constructor() { }
  dorms=[];
  

  ngOnInit() { 
    this.dorms = [{
        name:'República Masculina',
        location : 'Rio de Janeiro, Centro',
        avaliable_dorms : true,
        number_of_avaliable_dorms : 3,
        },
      
      {
        name: 'Kitnet', 
        location : 'Rio de Janeiro, Centro',
        avaliable_dorms : false,
        number_of_avaliable_dorms: 0, 
        },

      {
        name: 'Apartamento',
        location: 'Rio de Janeiro, Ilha do Fundão',
        avaliable_dorms: true,
        number_of_avaliable_dorms: 2,
        }
    ]   
  }   

}


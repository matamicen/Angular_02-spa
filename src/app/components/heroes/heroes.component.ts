import { Component, OnInit } from '@angular/core';
import { HeroesService,heroe } from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
 
})
export class HeroesComponent implements OnInit {

  heroes :heroe [] = [];
  
  constructor(private _heroesService:HeroesService) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
    

  }

}

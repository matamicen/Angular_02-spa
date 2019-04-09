import { Component, OnInit } from '@angular/core';
import { HeroesService,heroe } from "../../servicios/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
 
})
export class HeroesComponent implements OnInit {

  heroes :heroe [] = [];
  
  constructor(private router:Router, private _heroesService:HeroesService) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
    
  }

  verHeroe(idx:number) {
    console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }

}

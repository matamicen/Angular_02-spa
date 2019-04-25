import { Component, OnInit, OnDestroy  } from '@angular/core';
import { HeroesService,Heroe } from "../../servicios/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
 
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes :Heroe [] = [];
  
  constructor(private router:Router, private _heroesService:HeroesService) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
    console.log('ngOnInit');
    
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
    
  }

  verHeroe(idx:number) {
    // console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }

}

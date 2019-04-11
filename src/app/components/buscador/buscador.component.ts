import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any [] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private heroService:HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      console.log('parametro:'+ params['term']);
      this.heroes = this.heroService.buscarHeroes(params['term'])
      console.log(this.heroes);
      this.termino = params['term'];
      
      // this.heroe = this.heroeService.getHeroe(params['id']);
     
      // console.log(this.heroe);
      
    })
   }

  ngOnInit() {
  }

}

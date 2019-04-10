import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
  
})
export class HeroeComponent implements OnInit {

  heroe:any = {}

  constructor(private heroeService: HeroesService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      console.log('parametro:'+ params['id']);
      this.heroe = this.heroeService.getHeroe(params['id']);
    })
    

   }

  ngOnInit() {
  }



}

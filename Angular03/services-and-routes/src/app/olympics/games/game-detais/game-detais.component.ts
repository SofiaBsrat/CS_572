import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Db } from '../../services/db.service';


@Component({
  selector: 'app-game-detais',
  templateUrl: './game-detais.component.html',
  styleUrls: ['./game-detais.component.css']
})
export class GameDetaisComponent implements OnInit {
  data={game:'none'};

  constructor(route:ActivatedRoute,db:Db) {
       route.params.subscribe(p=>{
     this.data= db.getData(p['id']);
        console.log(this.data);
     
    })
    
   }

  ngOnInit() {
    
  }

}

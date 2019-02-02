import { Component, OnInit } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit,CanActivate {
f;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
  //   route.params.subscribe(p=>{
      
  //   if(p['id']< 2)
  //   f= true;
  //   else
  //   f= false;
  //   })
  // }
  if(route.params['id']<3) return true;
   else
this.router.navigate(['/'])
}
}

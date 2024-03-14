import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}


  goToP1(){
    this.router.navigate(['../tabs/p1']);
  }

  goToP2(){
    this.router.navigate(['../tabs/p2']);
  }

  goToP3(){
    this.router.navigate(['../tabs/p3']);
  }
  
  goToAbout(){
    this.router.navigate(['../tabs/about']);
  }

}

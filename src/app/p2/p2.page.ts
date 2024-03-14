import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

  apiInfo: any;
  age: number = 0;
  name:string='';
  persona:string='';

  constructor(private location: Location,private http: HttpClient) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  getAgeInfo() {
    this.http.get<any>(`https://api.agify.io/?name=${this.name}`).subscribe(
      response => {
        this.apiInfo = response;
        this.age = this.apiInfo['age'];
        this.assignPerson();
      },
      error => {
        console.log('Error fetching gender information:', error);
      }
    );
  }
  assignPerson() {
    if (this.age < 18) {
      this.persona = 'joven';
    } else if (this.age >= 18 && this.age < 50) {
      this.persona = 'adulto';
    } else {
      this.persona = 'anciano';
    }
    console.log(this.persona);

  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {

  gender: string = '';
  genderInfo: any;
  name:string='';
  probability:string='';

  constructor(private location: Location,private http: HttpClient) { }


  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }


  getGenderInfo() {
    this.http.get<any>(`https://api.genderize.io/?name=${this.name}`).subscribe(
      response => {
        this.genderInfo = response;
        this.gender = this.genderInfo['gender']
        this.probability = (this.genderInfo['probability']*100).toString();
        console.log(this.genderInfo);
      },
      error => {
        console.log('Error fetching gender information:', error);
      }
    );
  }
}

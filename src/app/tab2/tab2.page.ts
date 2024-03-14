import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  weather:any[]=[];
  isDaylight:string='';

  temperature:number=0;
  time:string='';

  
  constructor(private location: Location,private http: HttpClient) { 
    this.getWeatherInfo();
  }


  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }


  getWeatherInfo() {
    const currentDate = new Date();
    const unixTimestamp = Math.floor(currentDate.getTime() / 1000); // Convertir milisegundos a segundos

    this.http.get<any>(`https://my.meteoblue.com/packages/basic-15min_basic-day_current?apikey=7sHLcJb3dpIY8Cge&lat=18.4719&lon=-69.8923&asl=24&format=json`).subscribe(
      response => {
        this.weather = response.data_current;
        this.temperature = Math.round(response.data_current.temperature);
        this.time = response.data_current.time;
        this.isDaylight = response.is_daylight ? 'Sí' : 'No';
      },
      error => {
        console.log('Error fetching gender information:', error);
      }
    );
  }
}

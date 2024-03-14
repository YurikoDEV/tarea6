import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.page.html',
  styleUrls: ['./p3.page.scss'],
})
export class P3Page implements OnInit {
  universities: any[] = [];
  country: string = '';
  isLoading: boolean = false;

  constructor(private location: Location,private http: HttpClient) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  searchUniversities() {
    this.isLoading = true;

    const formattedCountry = this.country.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('+');

    this.http.get<any[]>(`http://universities.hipolabs.com/search?country=${formattedCountry}`).subscribe(
      response => {
        this.universities = response;
        console.log(this.universities);
        this.isLoading = false;
      },
      error => {
        console.log('Error fetching universities:', error);
        this.isLoading = false;
      }
    );
  }

  ionSearchUniversities(searchTerm: string) {
    if (searchTerm.trim() !== '') {
      this.universities = this.universities.filter(university =>
        university.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      // Si no hay término de búsqueda, restaura la lista original de universidades
      this.searchUniversities();
    }
  }

}

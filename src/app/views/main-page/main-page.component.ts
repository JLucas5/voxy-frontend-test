import { Component, OnInit } from '@angular/core';
import { PeopleService  } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  people: object[] = []

  displayedColumns: string[] = ['first-name', 'last-name', 'email', 'primary-group', 'phone', 'hours-studied'];

  constructor(
    private peopleService : PeopleService
  ) { }

  ngOnInit(): void {

  this.people = this.peopleService.getAllPeople()
  
  

  }

}

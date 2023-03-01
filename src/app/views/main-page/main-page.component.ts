import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PeopleService  } from 'src/app/services/people/people.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'primaryGroup', 'phone', 'hrsStudied'];
  people = new MatTableDataSource(this.peopleService.getAllPeople())
  filter : any

  constructor(
    private peopleService : PeopleService,
    private _liveAnnouncer: LiveAnnouncer 
  ) { }
  @ViewChild(MatSort)
  sort= new MatSort();

  ngAfterViewInit() {
    this.people.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  filterChange(filterValue: string){
    filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.people.filter = filterValue;
  }
}

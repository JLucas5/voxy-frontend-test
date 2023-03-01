import { Injectable } from '@angular/core';
import people from '../people/people.json';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getAllPeople(){
    return people
  }
}

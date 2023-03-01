import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';

import people from '../people/people.json';


describe('PeopleService', () => {
  let service: PeopleService;
  let serviceStub: any
  

  beforeEach(() => {

    serviceStub = {
      getAllPeople: ( ) => people
    }
    TestBed.configureTestingModule({
      providers:[
         {provide: PeopleService, useValue: serviceStub}
      ]
    });
    service = TestBed.inject(PeopleService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array with data', () => {
    expect(serviceStub.getAllPeople())
    .withContext('service returned stub value')
    .toEqual(people);
  })


});

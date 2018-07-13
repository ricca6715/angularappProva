import { Injectable } from '@angular/core';
import { Student } from '../components/models/Student';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  student: Student;
  students: Student[];

  data: Observable<any>;

  constructor() { 
    this.students =[
      {
        firstName: 'Alessandro',
        lastName: 'Fiore',
        age: 35,
        email: 'afiore@gmail.com',
        hide: false
      },
      {
        firstName: 'Roberto',
        lastName: 'Vergallo',
        age: 34,
        email: 'rvergallo@gmail.com',
        hide: false
      },
      {
        firstName: 'Luigi',
        lastName: 'Manco',
        age: 32,
        email: 'lmanco@gmail.com',
        hide: false
      }
    ];
  }

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  addStudent(s: Student) {
    this.students.unshift(s);
  }

  getData() {
    this.data = new Observable(observer => {

      setTimeout( () => {
        observer.next( 1 );
      }, 1000);

      setTimeout( () => {
        observer.next( 2 );
      }, 2000);

      setTimeout( () => {
        observer.next( 3 );
      }, 3000);

      setTimeout( () => {
        observer.next( 4 );
      }, 4000);

    });

    return this.data;
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student;
  students: Student[];

  showExtended: boolean = true;
  enableAdd: boolean = true;

  newStudent: Student = {
    firstName: '',
    lastName: '',
    age: null,
    email: ''
  };

  currentClasses = {}

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.student = {
      firstName : 'Mario',
      lastName : 'Rossi',
      age: 49,
      email: 'mrossi@gmail.com',
      hide: false
    }

    this.dataService.getStudents().subscribe( students => {
      this.students = this.students;
    });

/*    this.students =[
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
    ];*/
  
    this.addStudent({
      firstName: 'Adriana',
      lastName: 'Caione'
    });

    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.enableAdd
    };

    this.dataService.getData().subscribe( data => {
      console.log(data);
    });
  
  }

  addStudent(s: Student){
    s.hide = false;
    this.students.push(s);
    //this.student.unishft(s);
  }

  fireEvent(e) {
    console.log('Button pressed');
    console.log(e.type);
  }

  toggleHide(s: Student){
    s.hide = !s.hide;
  }

  onSubmit(e) {
    console.log('Submit pressed');
    e.preventDefault();
    this.addNewStudent();
  }

  addNewStudent() {
    //this.students.push(this.newStudent);
    this.dataService.addStudent(this.newStudent);
  }

}

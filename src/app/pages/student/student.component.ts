import { Component, OnInit } from '@angular/core';
import { Student } from './models/student.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentList: Student[] = [];
  editingStudent: Student;
  postId;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    //this.http.post<any>('https://localhost:7212/CreateStudent').subscribe()
  }

  updateStudent(value: Student): void {
    if (this.editingStudent) {
      const idx = this.studentList.indexOf(this.editingStudent);
      this.studentList[idx] = value;
      this.editingStudent = null;
    } else {
      this.studentList.push(value);
    }
  }

  editStudent(student: Student): void{
    this.editingStudent = student;
  }
}

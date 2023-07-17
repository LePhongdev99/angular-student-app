import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnChanges {
  @Input()
  studentList: Student[] = [];

  @Output()
  edit = new EventEmitter<Student>();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  editStudent(student: Student): void {
    this.edit.emit(student);
  }

}

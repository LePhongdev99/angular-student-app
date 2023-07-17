import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnChanges {
  @Input()
  data: Student;

  @Output()
  submit = new EventEmitter<Student>();

  form = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.addControl('name', this.fb.control(null, [Validators.required]));
    this.form.addControl('email', this.fb.control(null));
    this.form.addControl('address', this.fb.control(null));
    this.form.addControl('scheduleId', this.fb.control(null));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.setFormValue();
    }
  }

  private setFormValue(): void {
    this.form.patchValue({
      ...this.data
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      const student = {
        ...this.form.value,
      } as Student;

      this.submit.emit(student);
      
      this.form.reset();
    } else {
      window.alert('Form is required name');
    }
  }
}

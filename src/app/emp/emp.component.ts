import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  employees !: any;
  employeeForm !: FormGroup;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.employeeForm = this.formBuilder.group({
      id: [''],
      name: [''],
      city: [''],
      salary: ['']
    });
  }

  getEmployees() {
    this.api.getEmployees().subscribe({
      next: (response:any) => {
        console.log(response)
        this.employees = response;
      },
      error: () => {}
    });
  }

  onClickSaveButton(){

    let employee ={
      name: this.employeeForm.value.name,
      city: this.employeeForm.value.city,
      salary: this.employeeForm.value.salary
    }
    this.api.addEmployee(employee).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: () => {}
    });
  }

}
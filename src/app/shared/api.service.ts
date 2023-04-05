import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    let url = 'http://localhost:8000/employees';
    return this.http.get<any>(url);
  }
  addEmployee(employee: any) {
    let url = 'http://localhost:8000/employees';
    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let httpOption = {
      headers: headerObj
    }
    return this.http.post(url, employee, httpOption);
  }
}
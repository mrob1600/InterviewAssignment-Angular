import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'InterviewAssignment-NG';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {    
    this.httpClient.get<any>('https://localhost:5001/employees').subscribe(data => {
      console.log(data);
    })   
  }
}

import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
showEnvironment = false;
envVariable = "https://localhost:8080";
envVariable2 ="https://fedex.com";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
     if(fragment == 'env') {
       this.showEnvironment = true;
     } else{
      this.showEnvironment = false;
     }
  })

  }
 
  submit(){
    alert("URL Saved");
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  click_OpenWeb(str: string): void{
    var url = "http://www.google.com/search?q=" + str;
    window.open(url, "_blank");
  }
}

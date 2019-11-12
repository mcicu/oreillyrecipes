import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log('HeaderComponent constructor called');
  }

  ngOnInit(): void {
    console.log('HeaderComponent ngOnInit called');
  }
}

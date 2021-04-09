import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  title = 'taghead.xyz';
  titleSubText = 'Consume the borgor';

  constructor() { }

  ngOnInit(): void {

  }

  getTitle() {
    return this.title;
  }

  getTitleSubText() {
    return this.titleSubText;
  }

}

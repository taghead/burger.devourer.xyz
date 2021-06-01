import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  title = 'taghead.xyz';
  titleSubText = 'Consume the borgor';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  getTitle() {
    return this.title;
  }

  getTitleSubText() {
    return this.titleSubText;
  }

  openLoginDialog() {
    this.dialog.open(loginDialog);
  }

}

@Component({
  selector: 'app-dialog-login',
  templateUrl: 'header.component.dialog.login.html',
})
export class loginDialog {}

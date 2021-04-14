import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  panelOpenState = true;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {

  constructor() { }

  videos = ["j8H4pm9Q-Rw", "ud-jsyDQBOY", "KcDVHkdrBlw", "6f8jqEmDFVo", "ujNf5HPbvkA", "yPxfBpBgJ5U", "E-xhxS581Uc", "jXTp-tSUGZ8", "l-fs3cK9W5E", "J9Id5dDTYz8", "ruRVF1WM6Mg", "QkZZjotHsv4", "tC_s55QCq-k", "1Ma4K2518NA", "doQljoFtBIs"]
  ngOnInit(): void {
    document.getElementById("borgor-video").setAttribute("src", this.getVideo());
  }

  getVideo(){
    return "https://www.youtube-nocookie.com/embed/"+this.videos[Math.floor(Math.random() * this.videos.length)]+"?autoplay=1&t=4&loop=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0";
  }
}

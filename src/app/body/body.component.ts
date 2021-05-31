import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

   // Get initial video
   this.getVideo();

   // Event listener for Consume Another button
   let btnConsumeAnother = document.getElementById("btn-consume");
   btnConsumeAnother.addEventListener("click", this.getVideo);
  }

  getVideo(){
    let videos = ["j8H4pm9Q-Rw", "qlCGh33eIFQ", "ud-jsyDQBOY", "KcDVHkdrBlw", "6f8jqEmDFVo",
                 "E-xhxS581Uc", "J9Id5dDTYz8", "1Ma4K2518NA", "doQljoFtBIs"];

    let url="https://www.youtube-nocookie.com/embed/";
    let randomNumber = Math.floor(Math.random() * videos.length)
    let video=videos[randomNumber];
    let urlArgs = "?autoplay=1&t=4&loop=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&loop=1&rel=0";
    let videoElement = document.getElementById("borgor-video");
    videoElement.setAttribute("src", url+video+urlArgs);

    let videoCount = document.getElementById("video-count");
    videoCount.innerHTML = `Currently consuming burger ${randomNumber} out of ${videos.length}`
  }
}

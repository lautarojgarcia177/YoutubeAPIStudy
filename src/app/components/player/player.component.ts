import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  //built with https://www.npmjs.com/package/ngx-embed-video

  @ViewChild('asd') asd: ElementRef<HTMLElement>;

  finalizoElVideo = false;

  yt_iframe_html: any;
  
  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";

  constructor(private embedService: EmbedVideoService) {
    
  }


  ngOnInit(): void {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl, {
      query: { controls: 0 },
      attr: { width: 600, height: 600}
    });
    
  }

  play() {
    console.log('been here');
    this.yt_iframe_html.playVideo();
  }

}

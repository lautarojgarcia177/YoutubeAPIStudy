import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoId;

  @ViewChild('myPlayer') myPlayer: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.videoId = this.route.snapshot.paramMap.get('id');

    console.log('YT object', this.myPlayer);
  }

}

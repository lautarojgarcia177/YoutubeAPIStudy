import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-search-inside-channel',
  templateUrl: './search-inside-channel.component.html',
  styleUrls: ['./search-inside-channel.component.scss']
})
export class SearchInsideChannelComponent implements OnInit {

  channelId: string = 'UC2pmfLm7iq6Ov1UwYrWYkZA';
  query: string = 'usher';

  result;
  isLoading = false;

  constructor(private youtube: YoutubeService) { }

  search() {
    this.isLoading = true;
    this.youtube.searchInsideChannel(this.channelId, this.query).subscribe(res => {
      this.isLoading = false;
      this.result = res;
      console.log('Respuesta de la API de youtube', res);
    });
  }

  ngOnInit(): void {
  }

}

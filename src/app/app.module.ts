import { SearchInsideChannelComponent } from './components/search-inside-channel/search-inside-channel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { PrivateChannelPlaylistComponent } from './components/private-channel-playlist/private-channel-playlist.component';
import { ChannelPlaylistsComponent } from './components/channel-playlists/channel-playlists.component';
import { PlayerComponent } from './components/player/player.component';

import { EmbedVideo } from 'ngx-embed-video';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { WatchComponent } from './components/watch/watch.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PrivateChannelPlaylistComponent,
    SearchInsideChannelComponent,
    ChannelPlaylistsComponent,
    PlayerComponent,
    WatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    EmbedVideo.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

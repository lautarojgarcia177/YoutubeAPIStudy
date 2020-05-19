import { SearchInsideChannelComponent } from './components/search-inside-channel/search-inside-channel.component';
import { VideoComponent } from './components/video/video.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateChannelPlaylistComponent } from './components/private-channel-playlist/private-channel-playlist.component';


const routes: Routes = [
  { path: 'video/:id', component: VideoComponent},
  { path: 'privateChannelPlaylist', component: PrivateChannelPlaylistComponent},
  { path: 'searchInsideChannel', component: SearchInsideChannelComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'searchInsideChannel' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

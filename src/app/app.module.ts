import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Component Imports
import { AppComponent } from './app.component';
import { GithubComponent } from '../app/components/github/github.component';
import { TwitterFeedComponent } from '../app/components/twitterfeed/twitterfeed.component';
//Component Services
import { GithubService } from '../app/services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    TwitterFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

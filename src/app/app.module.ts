import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubComponent } from '../app/components/github/github.component';
import { TwitterFeedComponent } from '../app/components/twitterfeed/twitterfeed.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

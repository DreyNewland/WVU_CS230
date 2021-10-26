import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent1 } from './BodyComponents/body-component1';
import { BodyComponent2 } from './BodyComponents/body-component2';
import { BodyComponent3 } from './BodyComponents/body-component3';
import { BodyComponent4 } from './BodyComponents/body-component4';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopNavBarComponent2 } from './header/top-nav-bar2.component';
import { LayoutHeadersComponent } from './layout/layout-headers.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './pages/posts/posts.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { SavedComponent } from './pages/saved/saved.component';
import { HiddenComponent } from './pages/hidden/hidden.component';
import { RightSideComponent } from './layout/right-side/right-side.component';
import { UpvotedComponent } from './pages/upvoted/upvoted.component';
import { DownvotedComponent } from './pages/downvoted/downvoted.component';
import { AwardsreceivedComponent } from './pages/awardsreceived/awardsreceived.component';
import { AwardsgivenComponent } from './pages/awardsgiven/awardsgiven.component';
import { PostComponent } from './BodyComponents/post-component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './pages/createpost/createpost.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBarComponent2,
    BodyComponent1,
    BodyComponent2,
    BodyComponent3,
    BodyComponent4,
    LayoutMainComponent,
    LayoutHeadersComponent,
    PostsComponent,
    CommentsComponent,
    SavedComponent,
    HiddenComponent,
    RightSideComponent,
    UpvotedComponent,
    DownvotedComponent,
    AwardsreceivedComponent,
    AwardsgivenComponent,
    PostComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}


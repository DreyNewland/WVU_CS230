import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LayoutHeadersComponent } from './layout/layout-headers.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { AwardsgivenComponent } from './pages/awardsgiven/awardsgiven.component';
import { AwardsreceivedComponent } from './pages/awardsreceived/awardsreceived.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { CreatePostComponent } from './pages/createpost/createpost.component';
import { DownvotedComponent } from './pages/downvoted/downvoted.component';
import { HiddenComponent } from './pages/hidden/hidden.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SavedComponent } from './pages/saved/saved.component';
import { UpvotedComponent } from './pages/upvoted/upvoted.component';

const routes: Routes = [
  { path: 'home', component: LayoutMainComponent },
  { path: 'user/Dreyintor55/posts', component: PostsComponent },
  { path: 'user/Dreyintor55/comments', component: CommentsComponent },
  { path: 'user/Dreyintor55/saved', component: SavedComponent },
  { path: 'user/Dreyintor55/hidden', component: HiddenComponent },
  { path: 'user/Dreyintor55/upvoted', component: UpvotedComponent },
  { path: 'user/Dreyintor55/downvoted', component: DownvotedComponent },
  { path: 'user/Dreyintor55/gilded', component: AwardsreceivedComponent },
  { path: 'user/Dreyintor55/gilded/given', component: AwardsgivenComponent },
  { path: 'user/Dreyintor55/createpost', component: CreatePostComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

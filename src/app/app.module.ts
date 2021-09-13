import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent1 } from './BodyComponents/body-component1';
import { BodyComponent2 } from './BodyComponents/body-component2';
import { BodyComponent3 } from './BodyComponents/body-component3';
import { BodyComponent4 } from './BodyComponents/body-component4';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopNavBarComponent2 } from './header/top-nav-bar2.component';
import { TopNavBarComponent3 } from './header/top-nav-bar3.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBarComponent2,
    TopNavBarComponent3,
    BodyComponent1,
    BodyComponent2,
    BodyComponent3,
    BodyComponent4
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  numberKarma1:number = 2
}


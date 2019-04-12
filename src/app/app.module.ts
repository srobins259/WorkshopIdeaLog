import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeasComponent } from './ideas/ideas.component';
import { LoginComponent } from './login/login.component';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from './environment';

const config = FIREBASE_CONFIG;
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

// Config Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCIyiMeIgH7tjsJNszbjvjRLXvSnYGFlqU",
  authDomain: "angularlogin-e6e22.firebaseapp.com",
  databaseURL: "https://angularlogin-e6e22.firebaseio.com",
  projectId: "angularlogin-e6e22",
  storageBucket: "",
  messagingSenderId: "142648202167"
 };

 // Service
import { AuthService } from './services/auth.service';
// Guard
import { AuthGuard } from './guards/auth.guard';

// Router
export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(router),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService, AngularFireDatabase, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

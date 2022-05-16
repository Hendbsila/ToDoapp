import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';

import { DoneComponent } from './done/done.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ORANGE_ROUTTING } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
const firebaseConfig = {
  apiKey: "AIzaSyCY6nUiGG3gBPO65_b1kCHDar7n6fxf7sA",
  authDomain: "todoapp-c9edb.firebaseapp.com",
  projectId: "todoapp-c9edb",
  storageBucket: "todoapp-c9edb.appspot.com",
  messagingSenderId: "163291420599",
  appId: "1:163291420599:web:1a131b79277506bb27fa32",
  measurementId: "G-L88BRMYHKM"
};
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    DoneComponent,
    LoginComponent,
    NavbarComponent,
    AddtaskComponent,
    NotfoundComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ORANGE_ROUTTING,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig))
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

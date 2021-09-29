import { AuthGGuard } from './auth/auth-g.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCompComponent } from './user-comp/user-comp.component';
import {UsersModule } from './users/users.module';
import { DatabindComponent } from './databind/databind.component';
import { ClassstyleComponent } from './classstyle/classstyle.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventBindComponent } from './event-bind/event-bind.component';
import { NgifComponent } from './ngif/ngif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPipeComponent } from './about-pipe/about-pipe.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { Comp1Component } from './child/comp1/comp1.component';
import { Comp2Component } from './child/comp2/comp2.component';
import { Comp3Component } from './child/comp3/comp3.component';
import { AuthCompComponent } from './auth/auth-comp/auth-comp.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'Feedback',component:FeedbackComponent},
  {path:'Dashboard', canActivate:[AuthGGuard], component:DashboardComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    UserCompComponent,
    DatabindComponent,
    ClassstyleComponent,
    TwoWayComponent,
    EventBindComponent,
    NgifComponent,
    AboutPipeComponent,
    HomeComponent,
    ContactComponent,
    CardComponent,
    FeedbackComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    AuthCompComponent,
    DashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

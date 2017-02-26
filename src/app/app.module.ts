import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './app.home.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { detailsComponent } from 'app/app.details.component';
import { SignatureFieldComponent } from './signature-field/signature-field.component';
import { Routes, RouterModule,Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignatureFieldComponent,
    detailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SignaturePadModule,
    RouterModule.forRoot([
               {path:'details', component:detailsComponent},
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                 { path: 'home',  component: HomeComponent },
             ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { SharedModule } from './common/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { routes } from './router';

bootstrapApplication(AppComponent, {providers:[
  importProvidersFrom(
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes),
    HttpClient
    
  )
]})
  .catch((err) => console.error(err));

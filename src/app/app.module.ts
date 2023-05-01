import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from 'src/components/header/header.module';
import { SearchModule } from 'src/components/search/search.module';
import { OptionsModule } from 'src/components/options/options.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //own
    HeaderModule,
    SearchModule,
    OptionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

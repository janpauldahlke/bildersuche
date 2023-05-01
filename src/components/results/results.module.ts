import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ResultsComponent
  ]
})
export class ResultsModule { }

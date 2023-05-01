import { Component, Input } from '@angular/core';
import { environment } from 'environment';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() query: string = '';

  makeFetchQuery() {
    if (this.query.length < 1) return // could be error for user
    return `${environment.API_URL}/?key=${environment.API_KEY}&q=${this.query}&image_type=photo`;
  }

}

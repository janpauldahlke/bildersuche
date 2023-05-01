import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bildersuche';
  @Input() query = '';


  propagateQuery(query: any) {
    this.query = query;
  }

}

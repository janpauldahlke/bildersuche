import { Component, Input, SimpleChange } from '@angular/core';
import { environment } from 'environment';
import { IHits, ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  @Input() query: string = '';
  results: { hits: IHits[], total: number, totalHits: number } = { hits: [], total: 0, totalHits: 0 };
  uriCreated = false; // prevent intial render by flag
  constructor(private service: ResultsService) { }

  ngOnInit() { }

  onOnDestroy() { }

  ngOnChanges(changes: { query: SimpleChange }) {
    if (changes.query.previousValue !== changes.query.currentValue) {
      this.makeRequest()
    }
  }

  prepareQuery(): string {
    if (this.query.length < 1) return ''// could be error for user
    this.uriCreated = true;
    return `${environment.API_URL}/?key=${environment.API_KEY}&q=${this.query}&image_type=photo`;
  }

  makeRequest() {
    const uri = this.prepareQuery()
    if (this.uriCreated) {
      this.service.makeImageRequest(uri).subscribe((e) => {
        this.results = e;
      })
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  isError = false;
  searchForm = new FormGroup({
    searchTerm: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
    this.isSearchTermValid();
  }

  searchImages() {
    console.log(this.searchTerm())
  }

  searchTerm() {
    return this.searchForm.controls.searchTerm.value;
  }

  isSearchTermValid() {
    this.searchForm.valueChanges.subscribe((formSubscription) => {
      console.log(formSubscription)
    })
  }

}

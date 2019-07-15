import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getServiceState } from 'src/app/dashboard/state/reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  table;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.select(getServiceState).subscribe(t => {
      this.table = t.services.services;
    });
  }

}

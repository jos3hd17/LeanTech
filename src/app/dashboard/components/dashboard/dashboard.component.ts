import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { servicesInitial } from '../../state/reducers/home.reducers';
import { getServicesList, getServicesListSuccess } from '../../state/actions/home.actions';
import { State } from '../../state/reducers';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(getServicesList({}));
  }

}



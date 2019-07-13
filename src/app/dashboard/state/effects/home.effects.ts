import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ServiceService } from '../../services/dashboard/service.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { getServicesListSuccess } from '../actions/home.actions';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Injectable()
export class HomeEffects {

  loadServices$ = createEffect(() => this.actions$.pipe(
        ofType('[Home Page] GetServices'),
        mergeMap(() => this.serviceService.getServices()
        .pipe(
            map(service => (
                getServicesListSuccess({servicesList: service}) ),
            catchError(() => {
                console.log('Hijo de puta');
                return EMPTY;
            })
        ))
        )
    )
  );


  constructor(
    private actions$: Actions,
    private serviceService: ServiceService,
    private store: Store<State>
  ) {
      console.log('Paso por aca');
  }
}

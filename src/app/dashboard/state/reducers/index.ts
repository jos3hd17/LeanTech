import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as HomeReducer from './home.reducers';

export interface State {
  services: HomeReducer.ServiceState;
}

export const reducers: ActionReducerMap<State> = {
  services: HomeReducer.reducer
};

export const selectFeature = createFeatureSelector<State>('services');

export const getServiceState = createSelector(
  selectFeature,
  (state: State) => state.services
);

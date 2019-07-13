import { ServicesList } from 'src/app/generics/models/services.model';
import { getServicesList, getServicesListSuccess, ServicesAction} from './../actions/home.actions';

import { createReducer, on } from '@ngrx/store';


export const servicesInitial: ServicesList = {
    delivered: false,
    packageId: '',
    services: [],
    totalPrice: 0
};

export interface ServiceState {
    action: number;
    services: ServicesList;
}

export const initialState: ServiceState = {
    action: 0,
    services: servicesInitial
};

const serviceReducer = createReducer(
    initialState,
    on(getServicesList, (state, action) => ({
        ...state,
        action: state.action + 1,
        services: state.services
    })),
    on(getServicesListSuccess, (state, action) => ({
        action: state.action + 1,
        services: action.servicesList
    }))
);

export function reducer(state: ServiceState, action: ServicesAction) {
    return serviceReducer(state, action);
}


import { createAction, props, union } from '@ngrx/store';
import { ServicesList } from 'src/app/generics/models/services.model';


export const getServicesList = createAction(
    '[Home Page] GetServices',
    props<{ }>()
);

export const getServicesListSuccess = createAction(
    '[Home Page] GetServicesSuccess',
    props<{ servicesList: ServicesList }>()
);

const servicesAction = union({
    getServicesList,
    getServicesListSuccess
})

export type ServicesAction = typeof servicesAction;

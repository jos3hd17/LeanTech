import { ServicesList } from 'src/app/generics/models/services.model';

export const servicesJson: ServicesList = {
    services: [
        {
            date: new Date(),
            location: 'Atlanta, United States',
            icon: 'car',
            price: 23600,
            itemId: 1,
            selected: false
        },
        {
            date: new Date(),
            location: 'Medellín, Colombia',
            icon: 'moto',
            price: 90200,
            itemId: 2,
            selected: false
        },
        {
            date: new Date() ,
            location: 'Fuji, China',
            icon: 'plane',
            price: 180600,
            itemId: 3,
            selected: false
        },
        {
            date: new Date(),
            location: 'Montreal, Canada',
            icon: 'car',
            price: 54029,
            itemId: 4,
            selected: false
        },
        {
            date: new Date(),
            location: 'Bogotá, Colombia',
            icon: 'car',
            price: 23600,
            itemId: 1,
            selected: false
        }
    ],
    delivered: false,
    totalPrice: 100,
    packageId: '00ARN901'
};

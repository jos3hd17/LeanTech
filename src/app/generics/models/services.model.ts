export interface Service {
    date: Date;
    location: string;
    icon: string;
    price: number;
    itemId: number;
    selected: boolean;
}

export class ServicesList {
    services: Service[];
    delivered: boolean;
    totalPrice: number;
    packageId: string;
}

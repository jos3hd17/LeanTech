import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServicesList } from 'src/app/generics/models/services.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { servicesJson } from './services';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // Sería lo ideal, sin embargo no tengo un API :(
  // path = `${environment.production}/services.json `;

  constructor(private http: HttpClient) { }

  getServices(): Observable<ServicesList> {
    return of(servicesJson);
  }
}

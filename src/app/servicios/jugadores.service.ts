import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugURL = "https://proyectocrud-b8234.firebaseio.com/";

  constructor(private firebase: Firebase) { }
}

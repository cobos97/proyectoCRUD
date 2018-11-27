import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, PathReference, QueryFn} from 'angularfire2/database';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class JugadoresService {

    lista$: any[] = [];

    constructor(private db: AngularFireDatabase) {
    }


    /*
    listarJugadores() {
        this.db.list('/jugadores').snapshotChanges().pipe(map(item => {
            return item.map(a => {
                    const data = a.payload.val();
                    // cons key=a.payload.key;
                    return {data};
                }
            );
        })).subscribe(
            jugadores => {
                this.lista$ = jugadores;
            }
        );

        return this.lista$;

    }
    */

    listarJugadores() {
        return this.db.list('/jugadores').snapshotChanges().pipe(map(item => {
            return item.map(a => {
                    const data = a.payload.val();
                    // cons key=a.payload.key;
                    return {data};
                }
            );
        }));
    }


    guardarJugador(jugador) {
        // this.jugador = this.saveJugador();
        return this.db.list('jugadores').push(jugador);

    }

    /*
    saveJugador() {
        const saveJugador = {
            nombre: this.jugadoresForm.get('nombre').value,
            apellidos: this.jugadoresForm.get('apellidos').value,
            fechanac: this.jugadoresForm.get('fechanac').value
        };
        return saveJugador;
    }
    */


}

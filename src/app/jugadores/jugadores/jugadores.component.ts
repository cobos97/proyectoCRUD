import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList, PathReference, QueryFn} from 'angularfire2/database';
import {map} from 'rxjs/operators';
import {any} from 'codelyzer/util/function';
import {JugadoresService} from "../../servicios/jugadores.service";

@Component({
    selector: 'app-jugadores',
    templateUrl: './jugadores.component.html',
    styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {

    jugadores$: any[] = [];


    /*
    constructor(private db: AngularFireDatabase) {
    }
    */

    constructor(private sj: JugadoresService){  }

    ngOnInit() {
        /*
        this.db.list('/jugadores').snapshotChanges().pipe(map(item => {
            return item.map(a => {
                    const data = a.payload.val();
                    // cons key=a.payload.key;
                    return {data};
                }
            );
        })).subscribe(
            jugadores => {
                this.jugadores$ = jugadores;
            }
        );
        */

        this.sj.listarJugadores().subscribe(
            jugadores => {
                this.jugadores$ = jugadores;
            }
        );
    }

}

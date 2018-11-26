import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList, PathReference, QueryFn} from 'angularfire2/database';
import {map} from "rxjs/operators";

@Component({
    selector: 'app-jugadores',
    templateUrl: './jugadores.component.html',
    styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {

    jugadores: AngularFireList<any>;
    jugador: any;

    prueba: String;

    constructor(private db: AngularFireDatabase) {
    }

    ngOnInit() {
        console.log("Aquí");
        this.db.list('/').snapshotChanges().pipe(map(item=>{
            return item.map( a => {
                    const data = a.payload.val();
                    //cons key=a.payload.key;
                    return {data};
                }
            );
        })).subscribe(
            data =>{
                console.log(data[0].data)


            }
        );

    }

}

import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
    selector: 'app-jugadores',
    templateUrl: './jugadores.component.html',
    styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {

    jugadores: any[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}

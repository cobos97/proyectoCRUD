import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import {interval} from "rxjs";

@Component({
    selector: 'app-addjug',
    templateUrl: './addjug.component.html',
    styleUrls: ['./addjug.component.scss']
})
export class AddjugComponent implements OnInit {

    jugadoresForm: FormGroup;
    jugador: any;

    enviado: boolean;

    constructor(private jf: FormBuilder, private db: AngularFireDatabase) {
    }
    /*
    constructor(private db: AngularFireDatabase) { }
*/
    ngOnInit() {
        this.jugadoresForm = this.jf.group({
            nombre: ['', Validators.required ],
            apellidos: ['', Validators.required ],
            fechanac: ['', Validators.required ]
        });
    }

    onSubmit() {
        this.jugador= this.saveJugador();
        this.db.list('jugadores').push(this.jugador)
            .then(_ => {
                this.jugador = {}
                console.log('success')
        })

        this.enviado=true;

        this.jugadoresForm = this.jf.group({
            nombre: ['', Validators.required ],
            apellidos: ['', Validators.required ],
            fechanac: ['', Validators.required ]
        });

    }




    saveJugador() {
        const savePresupuesto = {
            nombre: this.jugadoresForm.get('nombre').value,
            apellidos: this.jugadoresForm.get('apellidos').value,
            fechanac: this.jugadoresForm.get('fechanac').value
        };
        return savePresupuesto;
    }

}

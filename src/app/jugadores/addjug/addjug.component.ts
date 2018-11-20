import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-addjug',
    templateUrl: './addjug.component.html',
    styleUrls: ['./addjug.component.scss']
})
export class AddjugComponent implements OnInit {

    jugadoresForm: FormGroup;
    jugador: any;

    constructor(private jf: FormBuilder) {
    }

    ngOnInit() {
        this.jugadoresForm = this.jf.group({
            nombre: ['', Validators.required ],
            apellidos: ['', Validators.required ],
            fechanac: ['', Validators.required ]
        });
    }

    onSubmit() {
        this.jugador= this.saveJugador();
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

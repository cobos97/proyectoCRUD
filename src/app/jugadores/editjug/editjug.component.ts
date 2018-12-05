import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from
        '@angular/forms';
import {JugadoresService} from '../../servicios/jugadores.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-editjug',
    templateUrl: './editjug.component.html',
    styleUrls: ['./editjug.component.scss']
})
export class EditjugComponent implements OnInit {

    jugadoresEditForm: FormGroup;
    id: any;
    jugador: any;
    nombre: any;
    apellidos: any;
    fecha: any;

    constructor(private pf: FormBuilder,
                private jugadorService: JugadoresService,
                private router: Router,
                private activatedRouter: ActivatedRoute) {
        this.activatedRouter.params
            .subscribe(parametros => {
                this.id = parametros['id'];
                console.log(this.id);
                //this.presupuestoService.getPresupuesto( this.id)
                //.subscribe( presupuesto => this.presupuesto = presupuesto)
            });
    }

    ngOnInit() {
        this.jugadoresEditForm = this.pf.group({
            nombre: ['', Validators.required],
            apellidos: ['', Validators.required],
            fecha: ['', Validators.required]
        });

    }


    onSubmit() {
        this.jugador = this.saveJugador();
        this.jugadorService.editarJugador(this.jugador, this.id)
            //.subscribe(newpre => {
                //this.router.navigate(['/jugadores'])
            //})
    }


    saveJugador() {
        const saveJugador = {
            nombre: this.jugadoresEditForm.get('nombre').value,
            apellidos: this.jugadoresEditForm.get('apellido').value,
            fecha: this.jugadoresEditForm.get('fecha').value
        };
        return saveJugador;
    }


}

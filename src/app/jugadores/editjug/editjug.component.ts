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
                this.nombre = parametros['nombre'];
                this.apellidos = parametros['apellidos'];
                this.fecha = parametros['fecha'];
                console.log(this.id);
                // this.presupuestoService.getPresupuesto( this.id)
                // .subscribe( presupuesto => this.presupuesto = presupuesto)
            });
    }

    ngOnInit() {


        this.jugadoresEditForm = this.pf.group({
            nombre: [this.nombre, Validators.required],
            apellidos: [this.apellidos, Validators.required],
            fecha: [this.fecha, Validators.required]
        });

    }


    onSubmit() {

        this.jugadorService.delJugador(this.id);

        this.jugadorService.guardarJugador(this.saveJugador())
            .then(_ => {
                this.jugador = {};
                this.nombre = '';
                this.apellidos = '';
                this.fecha = '';
                console.log('success');
                this.router.navigate(['/jugadores']);
            });

        // .subscribe(newpre => {
        // this.ro uter.navigate(['/jugadores'])
        // })
    }


    saveJugador() {
        const saveJugador = {
            nombre: this.jugadoresEditForm.get('nombre').value,
            apellidos: this.jugadoresEditForm.get('apellidos').value,
            fecha: this.jugadoresEditForm.get('fecha').value
        };
        return saveJugador;
    }


}

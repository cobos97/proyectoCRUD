import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {Routes, RouterModule} from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import {AppComponent} from './app.component';
import {InicioComponent} from './inicio/inicio.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {AddjugComponent} from './jugadores/addjug/addjug.component';
import {ReactiveFormsModule} from '@angular/forms';
import { JugadoresComponent } from './jugadores/jugadores/jugadores.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {InisesComponent} from './autenticacion/inises/inises.component';


const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'addjug', component: AddjugComponent},
    {path: 'jugadores', component: JugadoresComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'iniciosesion', component: InisesComponent},
    {path: '**', component: InicioComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        HeaderComponent,
        AddjugComponent,
        JugadoresComponent,
        RegistroComponent,
        InisesComponent
    ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [AutenticacionService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

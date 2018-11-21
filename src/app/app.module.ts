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




const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'addjug', component: AddjugComponent},
    {path: 'jugadores', component: JugadoresComponent},
    {path: '**', component: InicioComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        HeaderComponent,
        AddjugComponent,
        JugadoresComponent
    ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

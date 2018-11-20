import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {InicioComponent} from './inicio/inicio.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {AddjugComponent} from './jugadores/addjug/addjug.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'addjug', component: AddjugComponent},
    {path: '**', component: InicioComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        HeaderComponent,
        AddjugComponent
    ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

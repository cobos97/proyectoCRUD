import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AutenticacionService {

    constructor(private router: Router,
                private activatedRouter: ActivatedRoute) {
    }

    /*
    Devuelve un Promise de tipo fire.auth.userCredentials
    */
    registroUsuario(userdata) {
        return firebase.auth().createUserWithEmailAndPassword(userdata.email,
            userdata.password);
    }

    inicioSesion(userdata) {
        return firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password);

    }

    isAuthenticated() {
        const user = firebase.auth().currentUser;
        if (user) {
            return true;
        } else {
            return false;
        }
    }

    logout() {
        firebase.auth().signOut();
    }


}


import {AuthService} from '../service/auth.service'
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtHeaderInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // ajouter Authorization à l'entete de la requete is l'utilisateur est connecté
        const token = localStorage.getItem('daltek_USER_DASH');
        const isLoggedIn = this.authService.isAuthenticated();


        const method = req.method;
        if (isLoggedIn) {

                req = req.clone({
                    setHeaders: {
                        Authorization: `${token}`
                    },
                    withCredentials: false,
                });
        }

        return next.handle(req);
    }

}


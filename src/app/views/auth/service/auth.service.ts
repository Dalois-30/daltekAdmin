import { firstValueFrom, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private host: string = environment.url;
  public currentUser?: any;
  public user: any;
  private jwtHelper!: JwtHelperService;

  constructor(public httpClient: HttpClient, private router: Router) {
    this.jwtHelper = new JwtHelperService();
   }

  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem('daltek_USER_DASH');
    if (!token) return false;

    // const separated = token.split(" ") as Array<string>;
    // if (separated.length != 2) return false;

    // if (!separated[0].includes("Bearer")) return false;

    // const anotherSeparated = separated[1].split("|")
    // if (anotherSeparated.length != 2) return false;

    // if (isNaN(Number(anotherSeparated[0]))) return false;
    // console.log('token', token);
    return !this.jwtHelper.isTokenExpired(token);
    
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.host + 'auth-login/', { email, password }, { observe: 'body' });
  }

  saveToken(jwt: any): boolean {
    const jwtHelper = new JwtHelperService();
    localStorage.setItem('daltek_USER_DASH', jwt);

    return true;
  }

  getDecodedToken(): any {
    const token: any = localStorage.getItem('daltek_USER_DASH');
    if (!token) return null;
    const decode = this.jwtHelper.decodeToken(token);
    return this.httpClient.get<any>(`${this.host}users/${decode.user_id}`);
  }

  logOut(): void {
    localStorage.removeItem('daltek_USER_DASH');
    this.currentUser = null;
    this.router.ngOnDestroy();
    this.router.dispose();
    location.href = '/login';
  }

  getUser(): Promise<User | null> {
    const token: any = localStorage.getItem('daltek_USER_DASH');
    if (!token) return Promise.reject("No token");

    return firstValueFrom(this.httpClient.get<User>(`${this.host}user`));
  }
}

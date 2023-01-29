import { firstValueFrom, Observable, shareReplay, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../../auth/model/user';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private host: string = environment.url;
  public user: any;

  constructor(public httpClient: HttpClient, private router: Router) {

  }

  /**
   * Get all users from the database
   * @returns all the users of the platform.
   */
  getAllUser(): Observable<User> {
    return this.httpClient.get<User>(`${this.host}users`).pipe(
      shareReplay(1),
      tap({
        next: (users: any) => {
          console.log("all users", users);
        },
        error: (err: any) => {
          console.log("error", err);
        }
      })
    )
  } 

  /**
   * Get all valid users
   * @returns all validated users
   */
  getAllValidatedUsers(): Observable<User> {
    return this.httpClient.get<User>(`${this.host}admin/users`).pipe(
      shareReplay(1),
      tap({
        next: (users: any) => {
          console.log("all validated users", users);
        },
        error: (err: any) => {
          console.log("error", err);
        }
      })
    )
  }

  /**
   * Get a single user from the database
   * @param id 
   * @returns 
   */
  getOneUser(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.host}users/${id}`).pipe(
      shareReplay(1),
      tap({
        next: (user:any) => {
          console.log("user found", user);
          
        },
        error: (err: any) => {
          console.log("user error", err);
          
        }
      })
    )
  }

  /**
   * create a new user
   * @param formData 
   * @returns Observable<>
   */
  create(formData: FormData): Observable<User> {
    return this.httpClient.post<User>(`${this.host}users/`, formData).pipe(
      shareReplay(1),
      tap({
        next: (user: any) => {
          console.log("user created", user);
          
        },
        error: (err: any) => {
          console.log("error creating", err);
          
        }
      })
    )
  }

  /** 
  * @params id: number
  * @params formdata: FormData
  * @return Observable<>
  */
    update(id: string,formData: FormData): Observable<User> {
      return this.httpClient.put(`${this.host}users/${id}`, formData).pipe(
        shareReplay(1),
        tap({
          next: (user: any) => {
            console.log("user updated", user);
            
          },
          error: (err: any) => {
            console.log("update error", err);
            
          }
        })
      );
    }

    /**
     * Delete one user
     * @param id 
     * @returns Observable<>
     */
    delete(id: string): Observable<User> {
      return this.httpClient.delete<User>(`${this.host}users/${id}/`).pipe(
        shareReplay(1),
        tap((result: any) => {
          console.log("success deleted user", result); 

        })
      )
    }

}

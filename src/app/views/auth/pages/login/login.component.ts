import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  error = '';
  returnUrl!: string;
  private jwtHelper!: JwtHelperService

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public authenticationService: AuthService, private toast: ToastrService) {  
    this.jwtHelper = new JwtHelperService();
  }

  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] ?? '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */

  showToast(title:string, text:string, icon:any, timer = 1000) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: timer,
    })
  }

  async login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.showToast('Warning', 'Please fill all the fields !', 'warning');
      this.submitted = false;
    } else {
      let data = this.loginForm.value;
      try {
        const result = await firstValueFrom(this.authenticationService.login(data.email, data.password));
        console.log('result', result);
        const user = this.jwtHelper.decodeToken(result.access);
        // console.log('user', user); 
        
        if(user.is_superuser) {
          // const token = user.token_type + " " + result.access;
          if(this.authenticationService.saveToken(result.access)) this.router.navigateByUrl(this.returnUrl);
          // console.log('token', token);
          
        }else {
          this.showToast('Warning', 'Your are not an administrator !', 'warning');
        }
      } catch (error:any) {
        console.log("Error", error);
        this.showToast("Error", error.error.message ?? "An error has occured !", "error")
      }
    }
  }

}

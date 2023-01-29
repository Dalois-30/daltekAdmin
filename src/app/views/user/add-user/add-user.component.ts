import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit  {

  msg = 'loading';
  constructor(
    private router: Router,
    public modal: NgbModal,
    private userService: UserService
  ){}

  ngOnInit(): void {
  }

}

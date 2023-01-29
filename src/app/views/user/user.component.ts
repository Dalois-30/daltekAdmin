import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { lastValueFrom } from 'rxjs';
import { User } from '../auth/model/user';
import { UserService } from './service/user.service';
import { LocalDataSource } from 'ng2-smart-table';
import { UserImageComponent } from './user-image/user-image.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  msg = 'loading';
  result: any;
  users: User[] = [];
  constructor(
    private router: Router,
    public modal: NgbModal,
    private userService: UserService
  ){}


  settings = {
    noDataMessage: 'Aucune donnée',
    mode: 'external',
  
    actions: {
      add: false,
      edit: true,
      delete: true,
      create:false,
      custom:[{
      name:'delete',
      title:'<i class="fa fa-trash text-danger me-2"></i>',
    }]
   },
    edit: {
      editButtonContent: '<i class="fa fa-edit text-primary me-2"></i>',
      
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-eye text-primary"></i>',
      confirmDelete: true,
    },
    columns: {
      image: {
        title: '',
        type: 'custom',
        renderComponent: UserImageComponent
      },
      id: {
        title: 'ID'
      },
      email: {
        title: 'Full Name'
      },
      // registered: {
      //   title: 'Registered Date',
      //   // type: 'string',
      //   // valuePrepareFunction: (val: string) => {
      //   //   return val.length > 20 ? val.slice(0, 20) + '...' : val;
      //   // }
      // },
      // role: {
      //   title: 'Role'
      // },
      // status: {
      //   title: 'Status'
      // }
    }
  };

  source!: LocalDataSource;


  ngOnInit(): void {
    this.initData();
  }

  async initData() {
    try {
      this.result = await lastValueFrom(this.userService.getAllUser());
      this.users = this.result.results;
      console.log(this.users);
      

      if (this.users.length == 0) this.msg = "No data..."
      this.source = new LocalDataSource(this.users);
    } catch (error) {
      this.msg = "Unable to fetch categorie";
    }
  }

}

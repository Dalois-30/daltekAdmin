import { Component } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { User } from '../../auth/model/user';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent {
  value: any;
  rowData!: User;
}

import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { LocalDataSource } from 'ng2-smart-table';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}


const usersData = [
  {id: 0, name: 'John Doe', registered: '2022/01/01', role: 'Guest', status: 'Pending' },
  {id: 1, name: 'Samppa Nori', registered: '2022/01/31', role: 'Member', status: 'Active', _props: { color: 'success', align: 'middle' },},
  {id: 2, name: 'Estavan Lykos', registered: '2022/02/01', role: 'Staff', status: 'Banned', _cellProps: { 'name': { color: 'info', active: true }}},
  {id: 3, name: 'Chetan Mohamed', registered: '2022/02/01', role: 'Admin', status: 'Inactive', _cellProps: { _all: { color: 'danger'}, role: { active: true }}},
  {id: 4, name: 'Derick Maximinus', registered: '2022/03/01', role: 'Member', status: 'Pending', _selected: true },
  {id: 5, name: 'Friderik Dávid', registered: '2022/01/21', role: 'Staff', status: 'Active'},
  {id: 6, name: 'Yiorgos Avraamu', registered: '2022/01/07', role: 'Member', status: 'Active'},
  {id: 7, name: 'Avram Tarasios', registered: '2022/02/08', role: 'Staff', status: 'Banned'},
  {id: 8, name: 'Quintin Ed', registered: '2022/02/01', role: 'Admin', status: 'Inactive'},
  {id: 9, name: 'Enéas Kwadwo', registered: '2022/03/01', role: 'Member', status: 'Pending'},
  {id: 10, name: 'Agapetus Tadeáš', registered: '2022/01/21', role: 'Staff', status: 'Active'},
  {id: 11, name: 'Carwyn Fachtna', registered: '2022/01/01', role: 'Member', status: 'Active'},
  {id: 12, name: 'Nehemiah Tatius', registered: '2022/02/11', role: 'Staff', status: 'Banned'},
  {id: 13, name: 'Ebbe Gemariah', registered: '2022/02/08', role: 'Admin', status: 'Inactive'},
  {id: 14, name: 'Eustorgios Amulius', registered: '2022/03/01', role: 'Member', status: 'Pending'},
  {id: 15, name: 'Leopold Gáspár', registered: '2022/01/21', role: 'Staff', status: 'Active'},
  {id: 16, name: 'Pompeius René', registered: '2022/01/10', role: 'Member', status: 'Active'},
  {id: 17, name: 'Paĉjo Jadon', registered: '2022/02/01', role: 'Staff', status: 'Banned'},
  {id: 18, name: 'Micheal Mercurius', registered: '2022/02/11', role: 'Admin', status: 'Inactive'},
  {id: 19, name: 'Ganesha Dubhghall', registered: '2022/03/01', role: 'Member', status: 'Pending'},
  {id: 20, name: 'Hiroto Šimun', registered: '2022/01/21', role: 'Staff', status: 'Active'},
  {id: 21, name: 'Vishnu Serghei', registered: '2022/01/01', role: 'Member', status: 'Active'},
  {id: 22, name: 'Zbyněk Phoibos', registered: '2022/02/14', role: 'Staff', status: 'Banned'},
  {id: 23, name: 'Aulus Agmundr', registered: '2022/01/01', role: 'Member', status: 'Pending'},
  {id: 42, name: 'Ford Prefect', registered: '2001/05/25', role: 'Alien', status: 'Don\'t panic!', _cellProps: { role: { active: true }}}
]


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private chartsData: DashboardChartsData) {
  }

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
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      // name: {
      //   title: 'Nom',
      //   type: 'custom',
      //   renderComponent: CategoryCustomNameComponent
      // },
      registered: {
        title: 'Registered Date',
        // type: 'string',
        // valuePrepareFunction: (val: string) => {
        //   return val.length > 20 ? val.slice(0, 20) + '...' : val;
        // }
      },
      role: {
        title: 'Role'
      },
      status: {
        title: 'Status'
      }
    }
  };

  source!: LocalDataSource;

  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
    // this.source = new LocalDataSource(this.categories);
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }







  usersData = usersData;

  columns = [
    {
      key: 'name',
      _style: { width: '40%' },
      _props: { color: 'danger', class: 'fw-bold' },
    },
    'registered',
    { key: 'role', filter: false, sorter: false, _style: { width: '15%' }, _classes: 'text-muted small' },
    { key: 'status', _style: { width: '15%' } },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false,
    },
  ]

  getBadge(status: string) {
    switch (status) {
      case 'Active':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }

  getItem(item: any) {
    return Object.keys(item);
  }

  details_visible = Object.create({});

  toggleDetails(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }
}

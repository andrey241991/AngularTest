import { Component, OnInit } from '@angular/core';
import { users } from '../users';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = users
  // constructor() { }

  ngOnInit() {
  }

}

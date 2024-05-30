import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList: User[] = [];

  constructor(private router: Router) {
    this.userList = [
      { name: 'John Doe', email: 'Heloisa@example.com', role: 'Engenheiro de FE' },
      { name: 'Marcelo Gennari', email: 'Marcelo@example.com', role: 'Analista de dados' },
      { name: 'Nicolas Martins', email: 'Nicolas@example.com', role: 'Líder Técnico' },
    ];
  }

  addNewUser() {
    this.router.navigate(['/app/add-user']);
  }

  editUser(index: number) {
    this.router.navigate(['/app/edit-user']);
  }

  deleteUser(index: number) {
    this.userList.splice(index, 1);
  }
}

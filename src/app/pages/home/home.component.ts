import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList: User[] = [];
  totalUsers: number = 0;
  userRoles: { name: string, count: number }[] = [];

  ngOnInit() {
    // Dados mockados dos usuários
    this.userList = [
      { name: 'Heloisa Goulart ', email: 'Heloisa@example.com', role: 'Engenheiro de software' },
      { name: 'Marcelo Gennari', email: 'Marcelo@example.com', role: 'Analista de dados' },
      { name: 'Nicolas Martins', email: 'Nicolas@example.com', role: 'Líder Técnico' },
      { name: 'João Pedro', email: 'João@example.com', role: 'Engenheiro de dados' }
    ];

    this.calculateUserStats();
  }

  calculateUserStats() {
    // Calcula a quantidade total de usuários
    this.totalUsers = this.userList.length;

    // Calcula a quantidade de usuários por função
    const roleCountMap: { [key: string]: number } = {};
    this.userList.forEach(user => {
      if (roleCountMap[user.role]) {
        roleCountMap[user.role]++;
      } else {
        roleCountMap[user.role] = 1;
      }
    });

    this.userRoles = Object.keys(roleCountMap).map(role => ({
      name: role,
      count: roleCountMap[role]
    }));
  }
}

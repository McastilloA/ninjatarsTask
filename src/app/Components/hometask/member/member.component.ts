import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})


export class MemberComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  members: any = [
    {
      nameUser: 'Pepito Perez',
      email: 'Juan Perez.admin@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'Admin'
    },
    {
      nameUser: 'Carlos Perez',
      email: 'Carlos.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    },
    {
      nameUser: 'Juan Perez',
      email: 'Juan.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    },
    {
      nameUser: 'Manuel Perez',
      email: 'Manuel.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    },
    {
      nameUser: 'Juana Perez',
      email: 'Juana.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    },
    {
      nameUser: 'Alejandro Perez',
      email: 'Alejandro.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    },
    {
      nameUser: 'Alejandro Perez',
      email: 'Alejandro.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    },
    {
      nameUser: 'Alejandro Perez',
      email: 'Alejandro.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    },
    {
      nameUser: 'Alejandro Perez',
      email: 'Alejandro.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    },
    {
      nameUser: 'Alejandro Perez',
      email: 'Alejandro.Perez@gmail.com',
      phone: 3201234567,
      tag: 'Eligendi consectetur possimus cumque assumenda.',
      profile: 'User'
    }
  ]
}

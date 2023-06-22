import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User[] = [
    { username: 'user1', password:'password1' },
    { username: 'user2', password:'password2' },
    { username: 'user3', password:'password3' },
    { username: 'user4', password:'password4' },
    { username: 'admin', password:'admin' }
  ];

  newUser: User = { username: '', password: ''};

  constructor(private router: Router) {}

  login() {
    console.log('Iniciando sesión con el usuario:', this.newUser.username);
    const matchedUser = this.users.find(
      user =>
      user.username === this.newUser.username &&
      user.password === this.newUser.password
      );
    if (matchedUser) {
      console.log('Usuario encontrado en nuestra BD:', matchedUser);
      //Autenticacion exitosa, redireccionar a la pagina principal
      this.router.navigateByUrl('/home');
    } else {
      console.log('ERROR!!Este Usuario NO se encuentra en Nuestra BD');
      //Mostrar un mensaje de error
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }

  createUser() {
    //Verificar si el nuevo usuario ya existe
    const existingUser = this.users.find(
      (user) => user.username === this.newUser.username
    );
    if (existingUser) {
      alert ('El nombre de usuario ya existe en nuestra BD');
    } else {
      //Agregar el nuevo usuario a la lista
      this.users.push(this.newUser);
      alert('¡¡Usuario creado exitosamente!!');
    }
  }
}

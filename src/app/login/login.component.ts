import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  username: string;
  password: string;
}
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
  loginForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    const matchedUser = this.users.find(
      user => user.username === username && user.password === password
    );
    if (matchedUser) {
      console.log('Usuario encontrado en nuestra BD:', matchedUser);
      // Autenticacion exitosa, redireccionar a la pagina principal
      this.router.navigateByUrl('/home');
    } else {
      console.log('ERROR!!Este Usuario NO se encuentra en Nuestra BD');
      // Mostrar un mensaje de error
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }

  createUser() {
    const { username, password } = this.loginForm.value;
    // Verificar si el nuevo usuario ya existe
    const existingUser = this.users.find(user => user.username === username);
    if (existingUser) {
      alert('El nombre de usuario ya existe en nuestra BD');
    } else {
      // Agregar el nuevo usuario a la lista
      this.users.push({ username, password });
      alert('¡¡Usuario creado exitosamente!!');
    }
  }
}

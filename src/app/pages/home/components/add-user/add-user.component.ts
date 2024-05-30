import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserForm: FormGroup;
  constructor(private router: Router) {

    this.addUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  }
  saveUser() {
    if (this.addUserForm.valid) {
        console.log('Novo usuário adicionado:', this.addUserForm.value);
        // Aqui você pode adicionar lógica para salvar o usuário no backend, por exemplo, usando um serviço.
        this.router.navigate(['/app/users']);
    } else {
        console.log('Formulário inválido. Por favor, preencha corretamente todos os campos.');
    }
  }
}

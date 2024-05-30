import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;

  constructor(private router: Router) {
    this.editUserForm = new FormGroup({
      name: new FormControl('Heloisa Goulart', Validators.required),
      email: new FormControl('Heloisa@example.com', [Validators.required, Validators.email]),
      role: new FormControl('Engenheiro de software', Validators.required),
      password: new FormControl('password123', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  }

  ngOnInit(): void {
    // Você pode optar por deixar este método vazio ou usá-lo para outras inicializações
  }

  saveUser() {
    if (this.editUserForm.valid) {
      console.log('Usuário editado:', this.editUserForm.value);
      this.router.navigate(['/app/users']);
    } else {
      console.log('Formulário inválido. Por favor, preencha corretamente todos os campos.');
    }
  }
}

import {Component, inject, Optional} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {AutoFocus} from 'primeng/autofocus';
import {MessageService} from 'primeng/api';
import { FormError } from "../../../../shared/components/form-error/form-error";
import { LoginForm } from '../../models/user-dto';

@Component({
  selector: 'app-login',
  imports: [
    Button,
    FloatLabel,
    FormsModule,
    InputText,
    Password,
    ReactiveFormsModule,
    AutoFocus,
    FormError
],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _messageService: MessageService = inject(MessageService);

  loginForm = this._fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });


  submit(): void {
    this.loginForm.markAllAsTouched();

    if(this.loginForm.valid) {
      this._authService.login(this.loginForm.value as LoginForm).subscribe({
        next: (result) => {
          console.log(result);
          this._router.navigateByUrl('/house');
        },
        error: err => {
          this._messageService.add({severity: 'error', summary: err.error.content});
        }
      });
    }
  }
}

import {Component, inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FloatLabel} from 'primeng/floatlabel';
import {AutoFocus} from 'primeng/autofocus';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Button} from 'primeng/button';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    FloatLabel,
    AutoFocus,
    InputText,
    Password,
    Button
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _messageService: MessageService = inject(MessageService);

  registerForm: FormGroup;

  constructor() {
    this.registerForm = this._fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  submit(): void {
    this.registerForm.markAllAsTouched();

    if(this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe({
        next: () => {
          this._router.navigateByUrl('/home');
        },
        error: err => {
          this._messageService.add({severity: 'error', summary: err.error.content});
        }
      });
    }
  }
}

import {Component, effect, inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FloatLabel} from 'primeng/floatlabel';
import {AutoFocus} from 'primeng/autofocus';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Button} from 'primeng/button';
import {MessageService} from 'primeng/api';
import { RegisterForm } from '../../models/user-dto';
import { FormError } from "../../../../shared/components/form-error/form-error";
import { CustomValidators } from '../../../../shared/validators/custom-validators';


@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    FloatLabel,
    AutoFocus,
    InputText,
    Password,
    Button,
    FormError,
],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _messageService: MessageService = inject(MessageService);

  registerForm = this._fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    // nouvelle regle globale qui compare 2 champs
  }, { validators: [CustomValidators.comparePasswords] });

  constructor() {
    console.log('construit')
  }

  submit(): void {
    this.registerForm.markAllAsTouched();

    if(this.registerForm.valid) {
      this._authService.register(<RegisterForm>this.registerForm.value).subscribe({
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

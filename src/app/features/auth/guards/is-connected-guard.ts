import { CanActivateFn, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';
import { MessageService } from 'primeng/api';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  if(!authService.currentUser()) {
    const router = inject(Router);
    const messageService = inject(MessageService);
    // redirection vers la page de login dans la cas où on est pas connecter
    router.navigate(['/login']);
    messageService.add({ severity: 'error', detail: 'Vous devez d\'abord vous connecter !!' });
  }
  return authService.currentUser() !== undefined;
};

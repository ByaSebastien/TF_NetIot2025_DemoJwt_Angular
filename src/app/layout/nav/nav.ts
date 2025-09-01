import {Component, inject, Signal} from '@angular/core';
import {Button} from 'primeng/button';
import {ButtonGroup} from 'primeng/buttongroup';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../features/auth/services/auth.service';
import {UserTokenDto} from '../../features/auth/models/user-dto';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-nav',
  imports: [
    Button,
    ButtonGroup,
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);
  private readonly _messageService: MessageService = inject(MessageService);

  currentUser: Signal<UserTokenDto | undefined>;

  constructor() {
    this.currentUser = this._authService.currentUser;
  }

  logout() {
    this._authService.logout();
    this._messageService.add({severity: 'info', summary: 'Logged out'});
    this._router.navigate(['/']);
  }
}

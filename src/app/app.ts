import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './layout/header/header';
import {Nav} from './layout/nav/nav';
import {Footer} from './layout/footer/footer';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, Footer, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [MessageService],
})
export class App {
  protected readonly title = signal('TF_NetIot2025_DemoJwt_Angular');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './layout/header/header';
import {Nav} from './layout/nav/nav';
import {Footer} from './layout/footer/footer';
import {ToastModule} from 'primeng/toast';
import { Help } from "./shared/components/help/help";
import { Button } from "primeng/button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, Footer, ToastModule, Help, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [],
})
export class App {
  protected readonly title = signal('TF_NetIot2025_DemoJwt_Angular');

  helpOpen: boolean = false;
}

import {Component, inject, signal, Signal} from '@angular/core';
import {HelloService} from '../../services/hello-service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss'
})
export class Hello {

  private readonly _helloService: HelloService = inject(HelloService);
  result: Signal<{content: string} | undefined> = signal(undefined);
  data: {content: string} | undefined = undefined;

  constructor() {
    this.result = toSignal(this._helloService.hello());

    // this._helloService.hello().subscribe({
    //   next: r => {
    //     this.data = r;
    //   }
    // });
  }
}

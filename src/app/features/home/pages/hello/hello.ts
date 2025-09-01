import {Component, computed, effect, inject, input, InputSignal, signal, Signal, WritableSignal} from '@angular/core';
import {HelloService} from '../../services/hello-service';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-hello',
  imports: [
    FormsModule
  ],
  templateUrl: './hello.html',
  styleUrl: './hello.scss'
})
export class Hello {

  private readonly _helloService: HelloService = inject(HelloService);
  helloResolved: InputSignal<{ content: string }> = input.required<{content: string}>();

  inputValue;
  mySignal: WritableSignal<string>
  myComputedSignal: Signal<string>;

  constructor() {
    this.inputValue = 'test'
    this.mySignal = signal('mon signal');
    this.mySignal.set('Mon signal modifié');

    // Effectue a chaque set du signal specifié tout les effect associés
    effect(() => {
      console.log(this.mySignal());
    });

    // Pareil qu'effect mais retourne un signal du champ calculé sur base d'un signal
    // S'execute aussi a chaque set du signal specifié
    this.myComputedSignal = computed(() => {
      return this.mySignal() + "!!!";
    })
  }

  setSignal(): void {
    this.mySignal.set(this.inputValue);
    this.inputValue = '';
  }
}

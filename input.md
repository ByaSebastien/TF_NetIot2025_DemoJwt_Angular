<h1>Théorie Input</h1>

<i>Un input est un paramètre passé d'un composant parent vers un composant enfant.</i> 
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnvHdsw1KxNtayR6Sjck9aBUVED1-az9Rjg&ss">  

<i>Dans le composant enfant</i>
```ts
@Component({ selector: 'app-child' })
export class MyChildComponent {
    parameter = input.required<string>()
}
```

<i>Dans le composant parent (html)</i>
```html
<app-child [parameter]="'valeur passée en parmètre'" />
```

# Output

*Un output est un évément déclencher depuis un composant enfant qui peut être écouté par un composant parent. Cet événement peut permettre au composant enfant de communiquer une valeur (**$event**)*

*dans le composant enfant*

```ts
export class Child {
    onOuput = output<number>();

    method() {
        // déclenchement de l'évément
        onOuput.emit(42);
    }
}
```

*dans le composant parent*

```html
<!-- dans cet exemple $event = 42 -->
<app-child (onOutput)="console.log($event)"/>
```
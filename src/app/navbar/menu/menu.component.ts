import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items:any = [
    {
      path: 'template-driven-form',
      name: 'Template Driven Form'
    },
    {
      path: 'reactive-form',
      name: 'Reactive Form'
    },
  ]

}

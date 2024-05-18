import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  user: any;
  password: any;
  userLoggedIn(userInfo: any) {
    this.user = userInfo;
    console.log(this.user);
  }
}

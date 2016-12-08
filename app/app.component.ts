// angular
import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'main',
  template: `
  <StackLayout>
    <page-router-outlet></page-router-outlet>
  </StackLayout>
  `
})
export class AppComponent {
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onClickToGoBack() {
    console.log('go back clicked!');
  }

  onButtonClick() {
    console.log('button clicked!');
  }
}

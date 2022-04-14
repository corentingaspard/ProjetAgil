import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'BurgerQuizz';

  francais = true;

  translate(): void {
    this.francais = !this.francais;
    console.log(this.francais);
}
  /*isDarkTheme = true;

  // tslint:disable-next-line:typedef
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }*/
}

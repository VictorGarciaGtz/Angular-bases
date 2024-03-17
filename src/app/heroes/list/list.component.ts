import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public deleteHero?: string ;
  public heroNames: string [] = ['Spiderman', 'Capitan america', 'Thor', 'capitana marvel']

  removeLastHero():void {
    this.deleteHero = this.heroNames.pop();
  }
}

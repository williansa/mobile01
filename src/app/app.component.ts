import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Noticias', url: '/folder/Outbox', icon: 'newspaper' },
    { title: 'Contatos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Sobre', url: '/folder/Archived', icon: 'archive' },
   
  ];
  
  constructor() {}
}

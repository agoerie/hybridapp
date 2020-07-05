import { Injectable } from '@angular/core';

// import news & data-list
import { News } from './news';
import { NEWS } from './data-list';

import { MessageService } from './message.service';

// import rxjs observable
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private messageService: MessageService) {}

  getFoods(): Observable<News[]> {
    // Akan mengirim pesan jika mengambil data makanan
    this.messageService.add('NewsService: fetched news');
    return of(NEWS);
  }
}

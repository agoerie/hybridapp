import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NEWS } from '../data-list';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  news = NEWS;

  selectedNews: News;

  onSelect(newsList: News): void {
    this.selectedNews = newsList;
  }

  constructor() {}

  ngOnInit(): void {}
}

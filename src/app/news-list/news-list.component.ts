import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  news: News[];

  selectedNews: News;

  onSelect(newsList: News): void {
    this.selectedNews = newsList;
  }

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void {
    this.newsService.getFoods().subscribe((news) => (this.news = news));
  }
}

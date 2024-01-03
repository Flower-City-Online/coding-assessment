import { Component, OnInit } from '@angular/core';

import { ThemeService } from './theme/theme.service';
import { AppService } from './services/app.service';
import { IComment } from './interfaces/comment.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'coding-assessment';
  comments: IComment[] = [];
  isLoading: boolean = true
  constructor(
    public readonly themeService: ThemeService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.themeService.init('dark');
    this.getComments()
  }

  getComments() {
    this.appService.getComments().subscribe((comments: IComment[]) => {
      this.comments = comments
      this.isLoading = false;
    })
  }
}

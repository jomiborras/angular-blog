import { Component, OnInit } from '@angular/core';
// Import del servicio HTTP article
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  // Peticon http
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public articles: Article[];
  public url: string;

  constructor(
  		private _articleService: ArticleService
  	) {
    this.url = Global.url;
  }

  ngOnInit(): void {
  	// console.log(this._articleService.pruebas());
    this._articleService.getArticles().subscribe(
      response => {
        // console.log(response);
        if(response.articles){
          this.articles = response.articles;
        }else{
          // alguna funcion o método de que no llega nada (esta vacio)
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}

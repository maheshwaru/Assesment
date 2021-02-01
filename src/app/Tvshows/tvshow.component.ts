import { OnInit } from '@angular/core';
import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { tvshowService } from '../services/tvshowservice';
import { Router } from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-shows',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
})
export class tvshowComponent implements OnInit {
  public searchText;
  public resultArray = [];
  public ratingArray = [];
  public genres = ['Drama',
    'Action',
    'Thriller',
    'Science-Fiction',
    'Crime',
    'Horror',
    'Romance',
    'Adventure',
    'Espionage',
    'Mystery',
    'Supernatural',
    'Fantasy',
    'Family',
    'Anime',
    'Comedy',
    'History',
    'Medical',
    'Legal',
    'Music',
    'Western',
    'War',
    'Sports'];
  public defaultSelected: any;

  public compare = function compare(a, b) {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  }

  constructor(private _showService: tvshowService, private router: Router) { }
  ngOnInit() {
    /**getting all the tvshows by hitting service */
    this._showService.tvshowsGet().subscribe((res) => {
      this.resultArray = res;
      for (let i = 0; i < this.resultArray.length; i++) {
        const id = this.resultArray[i].id;
        const img = this.resultArray[i].image.medium;
        this.ratingArray.push({
          'id': this.resultArray[i].id,
          'rating': this.resultArray[i].rating.average,
          'name': this.resultArray[i].name,
          'img': this.resultArray[i].image.medium,
          'summary': this.resultArray[i].summary

        })
      }
      this.ratingArray.sort(this.compare);
    });
    this.defaultSelected = '';
  }

/** Function to get tiles based on genre**/
  onChange(genre: any) {
    const selectedGenre = this.resultArray.filter(x => x.genres.includes(genre));
    const genreArray = []
    for (let i = 0; i < selectedGenre.length; i++) {
      const obj = {
        id: selectedGenre[i].id,
        'rating': selectedGenre[i].rating.average,
        'name': selectedGenre[i].name,
        'img': selectedGenre[i].image.medium,
        'summary': selectedGenre[i].summary
      }
      genreArray.push(obj)
    }
    this.ratingArray = genreArray;
    this.ratingArray.sort(this.compare);
  }

  navigateToDetail(id: any) {
    this.router.navigateByUrl('showdetails/' + id + '');
  }

}
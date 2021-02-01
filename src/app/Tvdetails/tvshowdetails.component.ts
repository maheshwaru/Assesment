import { OnInit } from '@angular/core';
import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { tvshowService } from '../services/tvshowservice';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
@Component({
    selector: 'app-detailshows',
    templateUrl: './tvshowdetails.component.html',
    styleUrls: ['./tvshowdetails.component.css'],
})
export class tvshowDetailsComponent implements OnInit {
    public resultArray = [];
    public id;
    public name;
    public summary;
    public img;
    constructor(private route: ActivatedRoute, private _showService: tvshowService) { }
    ngOnInit() {
        this._showService.tvshowsGet().subscribe((res) => {
            this.resultArray = res;
            const id = parseInt(this.route.snapshot.params.id, 10);
            const data = this.resultArray.filter(element => element.id === id);
            this.id = data[0].id;
            this.name = data[0].name;
            this.summary = data[0].summary.replace(/(<([^>]+)>)/ig, '');
            this.img = data[0].image.medium;
            console.log(data)
        })
    }
}
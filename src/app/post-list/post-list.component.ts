import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: [ './post-list.component.scss' ]
})
export class PostListComponent implements OnInit {
	@Input() postTitle: string;
	@Input() postBody: string;
	@Input() postCreation: Date;
	@Input() postLoves: number;

	constructor () {}

	ngOnInit () {}

	augLove () {
		this.postLoves += 1;
	}
	demLove () {
		this.postLoves -= 1;
	}

	getColor () {
		if (this.postLoves > 0) {
			return 'green';
		} else {
			if (this.postLoves < 0) {
				return 'red';
			}
		}
	}
}

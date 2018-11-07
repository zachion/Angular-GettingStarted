import { Component, OnChanges, Input } from '@angular/core';
import { ConsoleReporter } from 'jasmine';
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    onClick(): void {
        console.log(`The rating ${this.rating} was clicked`);
    }

}

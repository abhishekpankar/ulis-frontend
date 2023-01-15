import { Component } from '@angular/core';

@Component({
  selector: 'app-star-pattern',
  templateUrl: './star-pattern.component.html',
  styleUrls: ['./star-pattern.component.css']
})
export class StarPatternComponent {
  pattern: string = '';
  
  length: number = 5

  makeStarPattern() {
    this.pattern = '';
    for (let i = 0; i < this.length/2; i++) {
      const noOfStar = ((i + 1) * 2) - 1;
      for (let j = this.length; j > 0; j--) {
          if (noOfStar >= j) {
              this.pattern = this.pattern + '*'
          } else {
              this.pattern = this.pattern + ' '
          }
          this.pattern = this.pattern + ' '
      }
      this.pattern = this.pattern + '\n';
    }
    console.clear();
    console.log(this.pattern)
  }
}

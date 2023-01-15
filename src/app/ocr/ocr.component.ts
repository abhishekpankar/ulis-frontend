import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent {
  url: string = '';
  text: string = '';

  selectFile(event: Event['target']) {

  }

  async extract() {
    const response = await axios.post('http://localhost:4000/ocr', {
      url: this.url,
    });
    this.text = response.data.data;
  }
}

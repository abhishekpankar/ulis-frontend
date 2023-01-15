import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ocr',
  templateUrl: './ocr.component.html',
  styleUrls: ['./ocr.component.css']
})
export class OcrComponent {
  text: string = '';

  selectFile(event: Event['target']) {
    console.log(event);
  }

  async extract() {
    const response = await axios.post('http://localhost:4000/ocr');
    this.text = response.data.text;
  }
}

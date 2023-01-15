import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQrComponent {
  search: string = '';

  qr: any = '';

  async generateQr() {
    const response = await axios.post('http://localhost:4000/qr/generate/link', {
      search: this.search,
    });
    this.qr = response.data;
  }
}

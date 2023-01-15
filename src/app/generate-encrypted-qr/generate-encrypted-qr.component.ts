import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-generate-encrypted-qr',
  templateUrl: './generate-encrypted-qr.component.html',
  styleUrls: ['./generate-encrypted-qr.component.css']
})
export class GenerateEncryptedQrComponent {
  qr?: any
  async generateQr() {
    const response = await axios.get('http://localhost:4000/qr/generate/data');
    this.qr = response.data;
  }
}

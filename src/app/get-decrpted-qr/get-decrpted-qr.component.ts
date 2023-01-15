import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-get-decrpted-qr',
  templateUrl: './get-decrpted-qr.component.html',
  styleUrls: ['./get-decrpted-qr.component.css']
})
export class GetDecrptedQrComponent {
  decryptedData: string = '';
  encryptedData: string = '';

  async getDecryptedData() {
    try {
      const response = await axios.post('http://localhost:4000/qr/data', {
        encryptedString: this.encryptedData,
      });
      this.decryptedData = JSON.stringify(response.data);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }
}

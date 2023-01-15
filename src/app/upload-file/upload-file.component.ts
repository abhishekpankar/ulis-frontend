import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  file?: File;
  fileResponse? : any;

  selectFile(target: (EventTarget | null) | HTMLInputElement) {
    this.fileResponse = null;
    if (target instanceof HTMLInputElement && target.files) {
      this.file = target.files[0];
    } else {
      alert('Something went wrong');
    }
  }

  async upload() {
    try {
      const formdata = new FormData();
      formdata.append('image', this.file!);
      const response = await axios.post('http://localhost:4000/files/upload', formdata);
      alert(response.data.message);
      this.fileResponse = response.data.data;
      this.file = undefined;
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }
}

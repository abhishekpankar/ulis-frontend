import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  lang: string = '';
  
  async fetchLanguages() {
    const response = await axios.get('http://localhost:4000/languages');
    this.lang = JSON.stringify(response.data.data);
  }
}

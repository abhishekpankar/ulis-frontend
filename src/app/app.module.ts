import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { GenerateQrComponent } from './generate-qr/generate-qr.component';
import { GenerateEncryptedQrComponent } from './generate-encrypted-qr/generate-encrypted-qr.component';
import { GetDecrptedQrComponent } from './get-decrpted-qr/get-decrpted-qr.component';
import { StarPatternComponent } from './star-pattern/star-pattern.component';
import { OcrComponent } from './ocr/ocr.component';
import { LanguagesComponent } from './languages/languages.component';
import { BackgroundColorComponent } from './background-color/background-color.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    GenerateQrComponent,
    GenerateEncryptedQrComponent,
    GetDecrptedQrComponent,
    StarPatternComponent,
    OcrComponent,
    LanguagesComponent,
    BackgroundColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

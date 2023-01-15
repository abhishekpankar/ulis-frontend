import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundColorComponent } from './background-color/background-color.component';
import { GenerateEncryptedQrComponent } from './generate-encrypted-qr/generate-encrypted-qr.component';
import { GenerateQrComponent } from './generate-qr/generate-qr.component';
import { GetDecrptedQrComponent } from './get-decrpted-qr/get-decrpted-qr.component';
import { LanguagesComponent } from './languages/languages.component';
import { OcrComponent } from './ocr/ocr.component';
import { StarPatternComponent } from './star-pattern/star-pattern.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  { path: 'upload-file', component: UploadFileComponent },
  { path: 'generate-qr-link', component: GenerateQrComponent },
  { path: 'generate-encrypted-qr', component: GenerateEncryptedQrComponent },
  { path: 'get-decrpted-qr', component: GetDecrptedQrComponent },
  { path: 'star-pattern', component: StarPatternComponent },
  { path: 'ocr', component: OcrComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'background-color', component: BackgroundColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotosamplesPage } from './photosamples';

@NgModule({
  declarations: [
    PhotosamplesPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotosamplesPage),
  ],
})
export class PhotosamplesPageModule {}

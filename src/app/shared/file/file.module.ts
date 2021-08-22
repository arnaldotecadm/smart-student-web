import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadModule } from './upload/upload.module';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, UploadModule],
  exports: [UploadComponent],
})
export class FileModule {}

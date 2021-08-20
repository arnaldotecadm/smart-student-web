import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadInputFor } from './FileUploadInputFor.directive';

@NgModule({
  declarations: [FileUploadInputFor],
  imports: [CommonModule],
  exports: [FileUploadInputFor],
})
export class DiretivasModule {}

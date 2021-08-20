import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BytePipe } from './byte-pipe.pipe';

@NgModule({
  declarations: [BytePipe],
  imports: [CommonModule],
  exports: [BytePipe],
})
export class PipesModule {}

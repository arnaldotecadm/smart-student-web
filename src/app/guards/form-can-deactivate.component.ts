import { NgForm } from '@angular/forms';
import { CanDeactivateDirtyComponent } from './can-deactivate-dirty.componente';

export abstract class FormCanDeactivate extends CanDeactivateDirtyComponent {
  abstract get form(): NgForm;

  canDeactivate(): boolean {
    return this.form.submitted || !this.form.dirty;
  }
}

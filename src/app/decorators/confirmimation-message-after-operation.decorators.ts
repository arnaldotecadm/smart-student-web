import { MatDialog } from "@angular/material/dialog";
import { ServiceLocator } from "app/services/service.locator";
import { ConfirmDialogComponent } from "app/shared/modals/confirm/confirm.component";

export function ConfirmationMessageAfterOperation(
  title?,
  subTitle?: string
): MethodDecorator {
  return function (target: Function, key: string, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let result;

      const matDialogService = ServiceLocator.injector.get(MatDialog);

      result = originalMethod.apply(this, args);

      matDialogService.open(ConfirmDialogComponent, {
        data: {
          btnOkLabel: "OK",
          title: title ? title : "Sucessoss",
          subtitle: subTitle ? subTitle : "Operação foi realizada com Sucesso",
          showCancelButton: false,
        },
      });

      return result;
    };

    return descriptor;
  };
}

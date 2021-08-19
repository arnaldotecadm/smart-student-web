import { ConfirmDialogComponent } from "app/shared/modals/confirm/confirm.component";

export function MustConfirm(subTitle: string): MethodDecorator {
  return function (target: Function, key: string, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let result;

      this.dialog.open(ConfirmDialogComponent, {
        data: {
          subTitle,
          fnOk: () => {
            result = originalMethod.apply(this, args);
          },
        },
      });

      return result;
    };

    return descriptor;
  };
}

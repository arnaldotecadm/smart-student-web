import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "pipeFormacaoColuna",
})
export class PipeFormacaoColunaPipe implements PipeTransform {
  constructor(
    private decimalPipe: DecimalPipe,
    private currencyPipe: CurrencyPipe
  ) {}

  transform(value: unknown, ...args: any[]): unknown {
    const formatacao = args[0];

    switch (formatacao?.tipo) {
      case "DATE":
        value = moment(value).format("DD/MM/yyyy");
        break;
      case "PIPE": {
        switch (formatacao.pipe) {
          case "decimal":
            value = this.decimalPipe.transform(
              value,
              formatacao.arguments ? formatacao.arguments : "1.2-2"
            );
            break;
          case "currency":
            value = this.currencyPipe.transform(
              value,
              formatacao.arguments ? formatacao.arguments : ""
            );
            break;
        }
        break;
      }
    }
    return value;
  }
}

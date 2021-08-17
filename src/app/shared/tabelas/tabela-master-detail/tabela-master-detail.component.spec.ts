import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
} from "@angular/common";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PipesModule } from "../pipes/pipes.module";
import { TabelaModule } from "../tabela/tabela.module";

import { TabelaMasterDetailComponent } from "./tabela-master-detail.component";

describe("TabelaMasterDetailComponent", () => {
  let component: TabelaMasterDetailComponent;
  let fixture: ComponentFixture<TabelaMasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaMasterDetailComponent],
      imports: [
        CommonModule,
        TabelaModule,
        BrowserAnimationsModule,
        PipesModule,
      ],
      providers: [DecimalPipe, DatePipe, CurrencyPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

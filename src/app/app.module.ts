import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";
import { FooterModule } from "./shared/footer/footer.module";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { DashboardModule } from "./dashboard/dashboard.module";
import { CadastrosModule } from "./cadastros/cadastros.module";
import { AlunoListModule } from "./cadastros/aluno/aluno-list/aluno-list.module";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),

    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FooterModule,
    AppRoutingModule,
    HomeModule,

    CoreModule,

    BrowserModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    DashboardModule,

    CadastrosModule,
    AngularFirestoreModule,

    ToastrModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private router: Router) {}

  authenticate(username: string, password: string) {}

  goHome() {
    this.router.navigate(["/home"]);
  }
}

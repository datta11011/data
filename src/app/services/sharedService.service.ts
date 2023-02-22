import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  casemgtNavigationGuide = new Subject<string>();
  private subject = new Subject<any>();
  constructor(private _snackBar: MatSnackBar) { }

  showToast(message: string) {
    this._snackBar.open(message, "GOT IT",
      {
        duration: 4000,
      });
  }

  getLoggedInUser(): string {
    const user = localStorage.getItem("LoggedInUser");
    return user || "";
  }

}

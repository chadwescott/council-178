import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "kofc-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
})
export class MemberFormComponent implements OnInit {
  public form = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl(""),
  });

  constructor(public firebaseService: FirebaseService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.firebaseService.addUser({
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      username: this.form.value.username,
      email: this.form.value.email,
    });
    this.form.reset();
  }
}

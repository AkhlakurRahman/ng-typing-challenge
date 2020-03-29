import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  randomParagraph = lorem.paragraph();
  enteredText = "";

  onInputChange(value: string) {
    this.enteredText = value;
  }

  classComparison(letter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return "pending";
    }

    return letter === enteredLetter ? "correct" : "incorrect";
  }
}

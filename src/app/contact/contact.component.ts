import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = this.formBuilder.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    tel: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    message: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  })

  constructor(private formBuilder: FormBuilder){}

  sendForm(): void {
    alert("A mensagem foi enviada!");
    this.contactForm.reset();
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {encryptText} from '../../../utils/encrypt';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {
  @Output() createUser = new EventEmitter<any>();
  @Input() roleId!: string | number | null;
  userForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    password: [null, [Validators.required]],
    phoneNumber: [null, [Validators.required]],
    userName: [null, [Validators.required]],
  })
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  onCreateUser() {
    this.createUser.emit({
      roleId: this.roleId,
      email: this.userForm.get('email')?.value.trim(),
      firstName: this.userForm.get('firstName')?.value.trim(),
      lastName: this.userForm.get('lastName')?.value.trim(),
      userName: this.userForm.get('userName')?.value.trim(),
      phoneNumber: this.userForm.get('phoneNumber')?.value.trim(),
      password: encryptText(this.userForm.get('password')?.value)
    });
  }
}

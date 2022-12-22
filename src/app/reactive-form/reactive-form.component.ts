import {
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
('@angular/forms');

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit, OnChanges, OnDestroy {
  @Output() start = new EventEmitter();
  value: any = ['CAR', 'BIKE', 'CYCLE', 'BUS', 'TRAIN', 'AEROPLANE'];
  submit: boolean = false;
  constructor(private route: Router) {}

  ngOnDestroy(): void {
    console.log('::::::data');
    this.start.emit({ name: 'Yuvraj', lname: 'Singh' });
  }

  ngOnChanges(_changes: SimpleChanges): void {
    console.log('::Changes', _changes);
  }

  ngOnInit(): void {
    console.log('::Reactive form');
  }

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.email]),
    Username: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    select: new FormControl('', [Validators.required]),
    Fuel: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
  });

  userlogin() {
    if (this.loginForm.status !== 'INVALID') {
      console.log(this.loginForm.controls);
      this.start.emit({ name: 'yuvi', gfname: 'varsha❤️' });
    }
    this.submit = true;
    if (this.loginForm.status !== 'INVALID') {
      this.route.navigate(['template']);
    }
  }

  sidebtn() {
    // this.loginForm.controls['user'].setValue("shsashank");=
    this.loginForm.patchValue({
      user: 'Sachin kumar',
      Username: 'I__sachinyat.sck',
      password: '*********',
      email: 'sachinkumar98114@gmail.com',
      age: '21',
      gender: 'male',
      dob: '2001-03-03',
      select: 'CAR',
      color: '#e20808',
      Fuel: 'true',
    });
  }

  // get user() {
  //   return this.loginForm.get('user')
  // }

  get gender() {
    return this.loginForm.get('gender');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get dob() {
    return this.loginForm.get('dob');
  }

  get age() {
    return this.loginForm.get('age');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get select() {
    return this.loginForm.get('select');
  }

  get color() {
    return this.loginForm.get('color');
  }

  get Username() {
    return this.loginForm.get('Username');
  }
  get Fuel() {
    return this.loginForm.get('Fuel');
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrServiceService } from 'src/app/shared/services/toastr/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: FormGroup;
  otpForm:FormGroup;
  isEnableOtpLogin:boolean = false;
  isOtpForm:boolean = false;
    constructor(private router:Router, private toastrService: ToastrServiceService){
      this.loginForm = new FormGroup({
        emailId: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('',Validators.required)
  
      })
  
      this.otpForm = new FormGroup({
        otp:new FormControl('', [Validators.required, Validators.pattern(`^[0-9]*$`)])
      })
    }
  
   
  
    ngOnInit() {
      // Check if the user is already logged in
      // if (this.authService.isLoggedIn()) {
      //   // Redirect to the home page if logged in
      //   this.router.navigate(['home']);
      // }
    }
  
    signInForm(){
      const {emailId, password} = this.loginForm.value;
      console.log(this.loginForm.value);
      // this.authService.login(emailId, password).subscribe({
      //   next: (res) => {
      //     this.authService.saveUserData(res.responseData);
      //     this.getAllRoles();
      //     this.getUserDetails();
      //    this.router.navigate(['home'])
      //   },
      //   error: (err) => {
      //     if(err.status === 200) {
      //    this.getAllRoles();
      //    this.router.navigate(['home']);
      //     }
      //     else {
  
      //     }
      //     this.toastrService.showToastr(err, 'Error', 'error', '');
      //     // Handle the error here in case of login failure
      //   }
      // });
    }
  
    getAllRoles(){
      // this.authService.getAllRoles().subscribe({
      //   next: (res) => {
      //    this.authService.saveAllRoles(res.responseData);
      //   },
      //   error: (err) => {
      //     // Handle the error here in case of login failure
      //   }
      // });
    }
    
    getOTP(){
      // if(this.loginForm.value.emailId){
      //  this.isOtpForm = true
      //  this.authService.generateOTP(this.loginForm.value.emailId).subscribe({
      //   next: (res) => {
      //     //console.log(res);
      //   }
      //  })
      // }
      // else{
      //   alert('please enter emailId')
      // }
      //console.log('getOtp',this.loginForm)
    }
  
    signInWithOtp(){
      this.isEnableOtpLogin = true
    }
  
    navigateBackToEmail(){
      this.isOtpForm = false;
      this.otpForm.reset();
    }
  
    navigateBackToLoginEmailPassword(){
      this.isEnableOtpLogin = false;
    }
  
    SubmitOTP(){
    //  this.authService.loginWithOTP(this.loginForm.value.emailId, this.otpForm.value.otp).subscribe({
    //   next: (res) => {
    //     this.authService.saveUserData(res.responseData);
    //     this.getAllRoles();
    //     this.getUserDetails();
    //      this.router.navigate(['home']);
    //   },
    //   error: (err) => {
    //     if(err.status !== 200) {
    //       this.toastrService.showToastr('Something went wrong. Please try again', 'Error', 'error', '');
    //     }
    //   }
    //  })
    }
  
    getUserDetails() {
      // // keyclock ID
      // const userId = this.authService.getUserData().userRepresentation.id;
      // this.userService.getUserDetails(userId).subscribe({
      //   next: (res) => {
      //     localStorage.setItem('userDetails', JSON.stringify(res.responseData));
      //   }
      // });
    }
  }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginBusiness } from 'src/app/business/LoginBusiness';
import { EmployeeDto } from 'src/app/entities/DTO/EmployeeDto';
import { RegisterRequestDto } from 'src/app/entities/DTO/RegisterRequestDto';
import { UserDto } from 'src/app/entities/DTO/UserDto';
import { Loader } from "@googlemaps/js-api-loader"
import { EnumGender, EnumGender2Label } from 'src/app/entities/enumerations/EnumGender';
import { EnumMilitaryServiceInfo, EnumMilitaryServiceInfo2Label } from 'src/app/entities/enumerations/EnumMilitaryServiceInfo';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private business: LoginBusiness) { }

  Genders: EnumGender[]= [EnumGender.Male, EnumGender.Female];
  MilitaryStatus: EnumMilitaryServiceInfo[] = [EnumMilitaryServiceInfo.Exempt,EnumMilitaryServiceInfo.Completed,EnumMilitaryServiceInfo.NotCompleted];
  public registerStepCompleted = 0;
  public autocomplete = null;
  public EnumMilitaryServiceInfo2Label = EnumMilitaryServiceInfo2Label;
  public EnumGender2Label= EnumGender2Label;

  ngOnInit() {
  }

  // loader = new Loader({
  //   apiKey: "AIzaSyAZq_9_DBpJFOBoVsFDfXarMM8Qmt9bUdw",
  //   version: "weekly"
  // });

  registerForm = new FormGroup(
    {
      gender: new FormControl(Validators.required),
      birthDate: new FormControl(Validators.required),
    })

  userForm = new FormGroup(
    {
      name: new FormControl("", Validators.required),
      surname: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      repassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
    }
  )

  infoForm = new FormGroup(
    {
      phone: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      address: new FormControl("", Validators.required),
      military: new FormControl("Not Completed", Validators.required),
    }
  )

  public nextStep() {
    if (!this.userForm.valid || !this.registerForm.valid) {
      // this.snackBar.open('Formu Doldurun!',"", {duration: 3000, verticalPosition:"top"});
      return
    }
    else if (this.userForm.controls.password.value != this.userForm.controls.repassword.value) {
      //this.snackBar.open('Passwords Do not Match!',"", {duration: 3000, verticalPosition:"top"});
      return
    }
    this.registerStepCompleted++;
    if (this.registerStepCompleted == 1) {
      //this.loadGoogleAPI();
    }
    console.log(this.registerStepCompleted);
  }

  public previousStep() {
    this.registerStepCompleted--;
    console.log(this.registerStepCompleted);
  }

  public testRegister() {
    console.log("registerForm", this.registerForm.valid)
    console.log("userForm", this.userForm.valid)
    console.log("infoForm", this.infoForm.valid)

    if (!this.registerForm.valid || !this.userForm.valid || !this.infoForm.valid) {
      //this.snackBar.open('Formu Doldurun!',"", {duration: 3000, verticalPosition:"top"});
      return;
    }

    if (this.autocomplete == null) {
      //this.snackBar.open('Lüften Konumu Seçiniz!',"", {duration: 3000, verticalPosition:"top"});
      return;
    }

    console.log("latitude:", this.autocomplete.getPlace().geometry.location.lat())
    console.log("longitude:", this.autocomplete.getPlace().geometry.location.lng())

    this.sendRequest();
  }

  private sendRequest() {
    var request = new RegisterRequestDto;
    debugger
    request.User = this.userForm.value as unknown as UserDto;
    request.Employee = this.registerForm.value as unknown as EmployeeDto

    request.Employee.militaryServiceInfo = this.infoForm.value.military;
    request.Employee.phoneNo = this.infoForm.value.phone;
    request.Employee.address = (document.getElementById("addressField") as HTMLInputElement).value;

    // request.Employee.xCoor = this.autocomplete.getPlace().geometry.location.lat();
    // request.Employee.yCoor = this.autocomplete.getPlace().geometry.location.lng();
    // debugger;

    console.log(request);

    this.business.RegisterRequest(request).subscribe((res) => {
      console.log(res);
    })
  }

  // private loadGoogleAPI(){
  //   this.loader.importLibrary("places").then((google)=>{
  //     const input = document.getElementById("addressField") as HTMLInputElement;
  //     const options = {
  //       componentRestrictions: { country: "tr" },
  //       fields: ["address_components", "geometry", "icon", "name"],
  //       strictBounds: false,
  //     };

  //     this.autocomplete = new google.Autocomplete(input, options);

  //     this.autocomplete.addListener("onselect",()=>{
  //       console.log(this.autocomplete.getPlace())
  //     })

  //     console.log(this.autocomplete);
  //   });
  // }
}

import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector:'reddit-auth',
    templateUrl: 'auth.component.html'
})
export class AuthComponent {
    private authObservable!:Observable<AuthResponse>;
    public buttonClicked:string = "";

    public constructor(private authService:AuthService){

    }

    public onSubmit(form:NgForm){
        console.log("Button Clicked")
        console.log(form);

        if (this.buttonClicked =="SignUp"){
            this.authObservable = this.authService.signup(form.value.email, form.value.password);
        }
        if (this.buttonClicked =="Login"){
            this.authObservable = this.authService.login(form.value.email, form.value.password);
        }
        
        this.authObservable.subscribe(
            (data:AuthResponse)=> {
                console.log(data);
            },
            error => {
                console.log(error.error.error);
                alert(error.error.error.message);
                
            }
        )
        form.resetForm();
    }
}
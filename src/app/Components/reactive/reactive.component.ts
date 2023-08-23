import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray, Validators} from '@angular/forms'
import { EMPTY } from 'rxjs';
import { DataService } from 'src/app/Service/data.service';
import { MustMatch } from 'src/app/_helper/must-match.validator';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  email: string;
  password: number;


  userForm: FormGroup;
  submit: any = false;
  constructor(
    private formBuilder: FormBuilder,
    private dataService:DataService
    ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      emailAddress: ['',[Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['',Validators.required],
      skills: this.formBuilder.array([])
    }, 
    {
      validator: MustMatch('password', 'confirmpassword')
    }
    );
  }

  get skills() {
    return this.userForm.controls['skills'] as FormArray;
  }

  addSkill() {
    const skillForm = this.formBuilder.group({
      skills: ['', Validators.required],
    });
    this.skills.push(skillForm);
  }

  deleteSkill(skillIndex: number) {
    this.skills.removeAt(skillIndex);
  }

  get f() { return this.userForm.controls; }

  onSubmit() {
    
    this.submit = true;

    if(this.userForm.invalid){
      return;
    }

    this.dataService.setNewUserInfo({
      email: this.email,
      password: this.password 
    });

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.userForm.value, null, 41)
    );
  }

  onReset(){
    this.submit = false;
    this.userForm.reset();
  }
}
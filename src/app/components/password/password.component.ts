import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

// obj = false;
  constructor() { }

  ngOnInit() {
  }

@Input() submitted = false;
@Output() obj = new EventEmitter<boolean>();

nextPage()
{
  this.obj.emit(false);
}
}

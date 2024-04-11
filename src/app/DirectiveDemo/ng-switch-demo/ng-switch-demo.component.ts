import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-switch-demo.component.html',
  styleUrl: './ng-switch-demo.component.css'
})
export class NgSwitchDemoComponent {
  switch_expression: string ="";
  SwitchValid : string="";
  checkCase(val:any)
  {
    console.log(val.value)
    this.SwitchValid = val.value;
  }
}

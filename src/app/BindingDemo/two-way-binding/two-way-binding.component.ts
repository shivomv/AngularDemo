import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  uname : string = "";
  OnInputClick(event:any){
    console.log(event);
    console.log(event.target.value);
    this.uname = event.target.value
  }
}

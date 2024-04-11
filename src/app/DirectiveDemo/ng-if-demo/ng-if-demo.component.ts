import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if-demo.component.html',
  styleUrl: './ng-if-demo.component.css'
})
export class NgIfDemoComponent {
  isValid: boolean=false;
  buttonCaption = "Create Block";
  onCreateBlock()
  {
    if(this.isValid==true)
    {
    this.isValid=false;
    this.buttonCaption = "Create Block"
    }
    else{

      this.isValid=true;
      this.buttonCaption = "Remove Block"
    }
  }
}

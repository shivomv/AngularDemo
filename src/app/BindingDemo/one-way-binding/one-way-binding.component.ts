import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css'
})
export class OneWayBindingComponent {



  //#1 ONE WAY DATA BINDING
  // DATABINDING = COMMUNICATION
  // TS(COMPONENT) ==> HTML(VIEW)

  dynamicName: string = "Abhishek";
  myMethod() {
    return "This is data binding in Angular " + this.dynamicName
  }
  appStatus: boolean = true;
  status1: string = "OnLine";
  status2: string = "Offline";

  CalculateSquareOfNumber(num: any) {
    return num * num;

  }

  notifyme: boolean = true;

  enable: boolean = true;
  msg: string = "";
  onAddCart() {
    this.msg = "Product add to cart"
  }
  onRemoveCart() {
    this.msg = "Product remove from cart"
  }
  onInputClick(event: any) {
    console.log(event)
  }
  //myStyle = "15px";
  myStyle = {
    'background': 'red',
    'border': '10px soild green'
  }

  mltClasses = {
    class1: true,
    class2: true,//if you want either of the class no to call , you can also mark it  false
    class3: false
  }
}

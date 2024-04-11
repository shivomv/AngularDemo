import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for-demo.component.html',
  styleUrl: './ng-for-demo.component.css'
})
export class NgForDemoComponent {
  products=[
    {id:'pro1001',proimg:"",name:"Laptop",price:35000},
    {id:'pro1002',proimg:"",name:"Mobile",price:15000},
    {id:'pro1003',proimg:"",name:"Pen Drive",price:1500},
    {id:'pro1004',proimg:"",name:"Led",price:12000}
  ]

  myobject=[];
}

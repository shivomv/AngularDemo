import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {

  birthday = new Date(1988, 3, 15);
  name = "Abhishek Sharma"

  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();

  Name: string = "ABHISHEK SHARMA"
  today: number = Date.now();
  msg: string = "This is demo text"


  products = [
    { id: 'pro1001', proimg: "", name: "Laptop", price: 35000 },
    { id: 'pro1002', proimg: "", name: "Mobile", price: 15000 },
    { id: 'pro1003', proimg: "", name: "Pen Drive", price: 1500 },
    { id: 'pro1004', proimg: "", name: "Led", price: 12000 }
  ]

  mywords: string = "This is my demo string";
}

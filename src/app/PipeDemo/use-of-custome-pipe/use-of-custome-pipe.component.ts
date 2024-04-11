import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReverseStringPipe } from '../pipe-demo/reverse-string.pipe';

@Component({
  selector: 'app-use-of-custome-pipe',
  standalone: true,
  imports: [CommonModule,ReverseStringPipe],
  templateUrl: './use-of-custome-pipe.component.html',
  styleUrl: './use-of-custome-pipe.component.css'
})
export class UseOfCustomePipeComponent {
 UserName: string  ="Test";
 NameList: any = ['KARTIKEYA','RANJEET','SHIVOM','SATVANT','AKSHAYA','MADHAVI']

}

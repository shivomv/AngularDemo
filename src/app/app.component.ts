import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNewComponentComponent } from './MyFirstWebsite/my-new-component/my-new-component.component';
import { LeftTextBlockComponent } from './MyFirstWebsite/left-text-block/left-text-block.component';
import { RightTextBlockComponent } from './MyFirstWebsite/right-text-block/right-text-block.component';
import { TopNavComponent } from './MyFirstWebsite/top-nav/top-nav.component';
import { OneWayBindingComponent } from './BindingDemo/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './BindingDemo/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './BindingDemo/event-binding/event-binding.component';
import { NgIfDemoComponent } from './DirectiveDemo/ng-if-demo/ng-if-demo.component';
import { NgSwitchDemoComponent } from './DirectiveDemo/ng-switch-demo/ng-switch-demo.component';
import { NgForDemoComponent } from './DirectiveDemo/ng-for-demo/ng-for-demo.component';
import { PipeDemoComponent } from './PipeDemo/pipe-demo/pipe-demo.component';
import { UseOfCustomePipeComponent } from './PipeDemo/use-of-custome-pipe/use-of-custome-pipe.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyNewComponentComponent,
    LeftTextBlockComponent,
    RightTextBlockComponent,
    TopNavComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    EventBindingComponent,
    NgIfDemoComponent,
    NgSwitchDemoComponent,
    NgForDemoComponent,
    PipeDemoComponent,
    UseOfCustomePipeComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angulardemo';
}

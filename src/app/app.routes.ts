import { Routes } from '@angular/router';
import { TopNavComponent } from './MyFirstWebsite/top-nav/top-nav.component';
import { MyNewComponentComponent } from './MyFirstWebsite/my-new-component/my-new-component.component';
import { RightTextBlockComponent } from './MyFirstWebsite/right-text-block/right-text-block.component';
import { OneWayBindingComponent } from './BindingDemo/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './BindingDemo/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './BindingDemo/event-binding/event-binding.component';
import { NgIfDemoComponent } from './DirectiveDemo/ng-if-demo/ng-if-demo.component';
import { NgSwitchDemoComponent } from './DirectiveDemo/ng-switch-demo/ng-switch-demo.component';
import { NgForDemoComponent } from './DirectiveDemo/ng-for-demo/ng-for-demo.component';
import { PipeDemoComponent } from './PipeDemo/pipe-demo/pipe-demo.component';
import { UseOfCustomePipeComponent } from './PipeDemo/use-of-custome-pipe/use-of-custome-pipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeftTextBlockComponent } from './MyFirstWebsite/left-text-block/left-text-block.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: 'newcomponent', component: AppComponent },
    { path: 'lefttextblock', component: LeftTextBlockComponent },
    { path: 'righttextblock', component: RightTextBlockComponent },
    { path: 'onewaybinding', component: OneWayBindingComponent },
    { path: 'twowaybinding', component: TwoWayBindingComponent },
    { path: 'eventbinding', component: EventBindingComponent },
    { path: 'ngifdemo', component: NgIfDemoComponent },
    { path: 'ngswitchdemo', component: NgSwitchDemoComponent },
    { path: 'ngfordemo', component: NgForDemoComponent },
    { path: 'pipedemo', component: PipeDemoComponent },
    { path: 'useofcustomepipe', component: UseOfCustomePipeComponent },
    // { path: '**', component: PageNotFoundComponent }

];

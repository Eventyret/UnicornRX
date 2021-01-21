import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';


@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule]
})
export class DemoModule {}

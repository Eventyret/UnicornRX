import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { SharedModule } from './pages/shared/shared.module';
import { StylesModule } from './pages/styles/styles.module';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'styles',
        loadChildren: (): Promise<void | StylesModule> =>
          import('./pages/styles/styles.module').then((m) => m.StylesModule)
      },
      {
        path: 'shared',
        loadChildren: (): Promise<void | SharedModule> =>
          import('./pages/shared/shared.module').then((m) => m.SharedModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}

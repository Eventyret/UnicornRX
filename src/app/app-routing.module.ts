import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoModule } from './pages/demo/demo.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'demo',
        loadChildren: (): Promise<void | DemoModule> =>
          import('./pages/demo/demo.module').then((m) => m.DemoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

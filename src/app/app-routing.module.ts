import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'parts',
    loadChildren: () => import('./parts/part.module').then(m => m.PartModule)
  },

  {
    path: '',
    redirectTo: 'parts',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

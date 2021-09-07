import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PartComponent } from './part.component'
import { PartMinMaxFilterPipe } from "./pipes/part.min-max-filter.pipe"
import { RouterModule, Routes } from '@angular/router';
import { PartFilterComponent } from './part-filter/part-filter.component';
import { PartGridComponent } from './part-grid/part-grid.component'

const routes: Routes = [
  {
    path: '',
    component: PartComponent,
  }
];

@NgModule({
imports: [

  ReactiveFormsModule,
  CommonModule,
  RouterModule.forChild(routes)],
exports: [RouterModule],
declarations: [PartComponent, PartFilterComponent,PartMinMaxFilterPipe, PartGridComponent]
})
export class PartModule {}

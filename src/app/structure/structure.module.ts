import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { ItemTableComponent } from './components/item-table/item-table.component';

@NgModule({
  declarations: [HeaderComponent, TableComponent, ItemTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    TableComponent
  ]
})
export class StructureModule { }

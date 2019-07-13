import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { ItemTableComponent } from './components/item-table/item-table.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, TableComponent, ItemTableComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    TableComponent
  ]
})
export class StructureModule { }

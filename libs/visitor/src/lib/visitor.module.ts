import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor/visitor.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  declarations: [
    VisitorComponent
  ],
})
export class VisitorModule {}

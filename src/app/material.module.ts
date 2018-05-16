import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTooltipModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTooltipModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTooltipModule]
})

export class MaterialModule {};
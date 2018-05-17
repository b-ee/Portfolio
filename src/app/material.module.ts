import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTooltipModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTooltipModule, MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTooltipModule, MatCardModule]
})

export class MaterialModule {};
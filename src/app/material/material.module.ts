import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatFormFieldModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { DocsExampleComponent } from '@docs-components/public-api';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, NgStyle, TableDirective, TableColorDirective, TableActiveDirective, FormSelectDirective],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss',

  
})
export class RecetaComponent {

 
}


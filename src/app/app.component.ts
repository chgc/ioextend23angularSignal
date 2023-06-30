import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricEditorComponent } from './metric-editor/metric-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, MetricEditorComponent],
})
export class AppComponent {}

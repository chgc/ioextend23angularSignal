import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-editor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="update(-1)" [disabled]="metric === 0">-</button>
    {{ metric }}
    <button (click)="update(1)">+</button>
  `,
  styleUrls: ['./metric-editor.component.css'],
})
export class MetricEditorComponent {
  metric = 0;
  update(value: number) {
    this.metric -= value;
  }
}

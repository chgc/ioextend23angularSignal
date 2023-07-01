import {
  Component,
  booleanAttribute,
  Input,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-editor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="update(-1)" [disabled]="metric() === 0">-</button>
    {{ metric() }}
    <button (click)="update(1)" [disabled]="upDisable">+</button>
  `,
  styleUrls: ['./metric-editor.component.css'],
})
export class MetricEditorComponent {
  @Input({ required: true }) metric!: WritableSignal<number>;
  @Input({ transform: booleanAttribute }) upDisable: boolean = false;
  update(value: number) {
    this.metric.update((lastValue) => lastValue + value);
  }
}

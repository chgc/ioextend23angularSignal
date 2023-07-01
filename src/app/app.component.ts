import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricEditorComponent } from './metric-editor/metric-editor.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, MetricEditorComponent],
})
export class AppComponent {
  hero = inject(HeroService);

  angular = computed(() => new Array(this.hero.metrics.angular()));
  nerdness = computed(() => new Array(this.hero.metrics.nerdness()));
  zonelessness = computed(() => new Array(this.hero.metrics.zonelessness()));

  totalPoints = computed(
    () =>
      this.hero.metrics.angular() +
      this.hero.metrics.nerdness() +
      this.hero.metrics.zonelessness()
  );

  remainPoints = computed(() => 20 - this.totalPoints());
  upDisable = computed(() => this.remainPoints() <= 0);
}

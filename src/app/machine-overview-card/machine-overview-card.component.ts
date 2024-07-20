import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { getColorClass, getIcon, getStatusIcon } from '../../constants';

@Component({
  selector: 'app-machine-overview-card',
  standalone: true,
  imports: [FlexLayoutModule, MatIconModule],
  templateUrl: './machine-overview-card.component.html',
  styleUrl: './machine-overview-card.component.scss'
})
export class MachineOverviewCardComponent {
  @Input() name: string = '';
  @Input() state: string = 'Running';
  getColorClass(): string {
    return getColorClass(this.state)
  }

  getStatusIcon(): string {
    return getStatusIcon(this.name)
  }

  getIcon(): string {
    return getIcon(this.state)
  }
}

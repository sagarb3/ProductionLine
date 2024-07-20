import { Component, Input } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { getColorClass, getIcon } from '../../constants';

@Component({
  selector: 'app-machine-card',
  standalone: true,
  imports: [FlexLayoutModule, MatIconModule],
  templateUrl: './machine-card.component.html',
  styleUrl: './machine-card.component.scss'
})
export class MachineCardComponent {
  @Input() name: string = '';
  @Input() state: string = 'Running';
  activeMachineName: string | null = null;

  constructor() { }

  ngOnInit(): void {

  }

  getColorClass(): string {
    return getColorClass(this.state)
  }

  getIcon(): string {
    return getIcon(this.state)
  }

}

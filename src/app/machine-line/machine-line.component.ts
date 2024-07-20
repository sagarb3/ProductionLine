import { Component } from '@angular/core';
import { MachineService } from '../machine.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MachineOverviewCardComponent } from '../machine-overview-card/machine-overview-card.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-machine-line',
  standalone: true,
  imports: [FlexLayoutModule,MachineOverviewCardComponent,NgFor,NgIf],
  templateUrl: './machine-line.component.html',
  styleUrl: './machine-line.component.scss'
})
export class MachineLineComponent {
  machines: any[] = [];
  constructor(private machineService: MachineService) {
    this.machineService.getMachines().subscribe((data) => {
     this.machines = data;
    });
    
  }
}

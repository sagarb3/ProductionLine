import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MachineCardComponent } from '../machine-card/machine-card.component';
import { NgFor } from '@angular/common';
import { MachineService } from '../machine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [FlexLayoutModule, MachineCardComponent, NgFor],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  machines: any[] = [];
  constructor(private machineService: MachineService,private router: Router) {
    this.machineService.getMachines().subscribe((data) => {
      this.machines = data;
    });
  }
  navigateToMachineInfo(name: string): void {
    this.router.navigate(['/machine', name]);
  }
}

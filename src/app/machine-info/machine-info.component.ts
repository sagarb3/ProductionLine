import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MachineService } from '../machine.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-machine-info',
  standalone: true,
  imports: [NgIf, FlexLayoutModule],
  templateUrl: './machine-info.component.html',
  styleUrl: './machine-info.component.scss'
})
export class MachineInfoComponent {
  machineInfo: any = null;
  constructor(private route: ActivatedRoute, private machineService: MachineService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['id'];
      if (name) {
        this.machineService.getMachineInfo(name).subscribe(info => {
          this.machineInfo = info;
        });
      }
    })

  }
}

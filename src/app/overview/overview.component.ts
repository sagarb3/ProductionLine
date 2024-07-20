import { Component } from '@angular/core';
import { MachineLineComponent } from '../machine-line/machine-line.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [MachineLineComponent,FlexLayoutModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}

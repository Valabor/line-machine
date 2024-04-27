import { Component } from '@angular/core';
import { MachineService } from '../../services/machine.service';
import { CommonModule } from '@angular/common';
import { MachineItemComponent } from '../machine-item/machine-item.component';
import { ConnectorComponent } from '../connector/connector.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, MachineItemComponent, ConnectorComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  public machinesList = this._machineService.getMachineData();
  constructor(private _machineService: MachineService) {}
}

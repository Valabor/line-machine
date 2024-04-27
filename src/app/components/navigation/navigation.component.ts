import { Component } from '@angular/core';
import { MachineItemComponent } from '../machine-item/machine-item.component';
import { MachineService } from '../../services/machine.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MachineItemComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public machinesList = this._machineService.getMachineData();
  constructor(private _machineService: MachineService) {}
 
}

import { Component, Input } from '@angular/core';
import { Machine } from '../../models/machine.model';
import { NgClass } from '@angular/common';
import { ICONS } from '../../constants/icons';

@Component({
  selector: 'app-machine-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './machine-item.component.html',
  styleUrl: './machine-item.component.scss'
})
export class MachineItemComponent {
  @Input() machine: Machine | undefined;
  @Input() isBig = false;
  public ICONS = ICONS;

  getStatusIcon(iconName?: string): string {
    return this.ICONS[iconName as keyof typeof ICONS];
  }
}

import { Injectable } from '@angular/core';
import data from "../../assets/mocks/machines.json"
import { Observable, map, of, shareReplay } from 'rxjs';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private _machineData = data;
  
  public getMachineData(): Observable<Machine[]> {
    return of(this._machineData).pipe(shareReplay(), map(data => data?.length ? data : []));
  }
}

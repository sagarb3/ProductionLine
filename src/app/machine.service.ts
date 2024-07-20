import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Machine {
  name: string;
  state: string;
  description: string;
  details: {
    manufacturer: string;
    model: string;
    lastMaintenance: string;
    location: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  url: string = 'machines.json';
  constructor(private http: HttpClient) { }
  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.url);
  }

  getMachineInfo(name: string): Observable<Machine[] | undefined> {
    return this.http.get<Machine[]>(this.url).pipe(
      map((machines: any[]) => machines.find(machine => machine.name === name))
    );
  }
}

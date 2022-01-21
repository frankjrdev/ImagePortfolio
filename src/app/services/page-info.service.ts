import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/data-info.interface';

@Injectable({
  providedIn: 'root',
})
export class PageInfoService {
  info: InfoPagina = {};
  cargada = false;
  team: any[] = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http
      .get('assets/data/data-pages.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private loadTeam() {
    this.http
      .get('https://angular-html-e3874-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.team = resp;
      });
  }
}

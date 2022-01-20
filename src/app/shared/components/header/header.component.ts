import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageInfoService } from 'src/app/services/page-info.service';
import { InfoPagina } from '../../../interfaces/data-info.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public service: PageInfoService, private router: Router) {}

  ngOnInit(): void {}

  buscarProducto(valor: string) {
    if (valor.length < 1) {
      return;
    }

    this.router.navigate(['search/', valor]);
  }
}

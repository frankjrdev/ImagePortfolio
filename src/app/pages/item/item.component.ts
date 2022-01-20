import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoFull } from '../../interfaces/producto-full.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  producto: ProductoFull | any;
  id: string | any;

  constructor(
    private route: ActivatedRoute,
    public serviceProduct: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.serviceProduct.getProduct(params['id']).subscribe((product) => {
        this.id = params['id'];
        this.producto = product;
      });
    });
  }
}

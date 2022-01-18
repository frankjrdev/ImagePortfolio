import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  loading = true;
  productos: Producto[] = [];
  constructor(private http: HttpClient) {
    this.getProduct();
  }

  private getProduct() {
    return this.http
      .get(
        'https://angular-html-e3874-default-rtdb.firebaseio.com/productos_idx.json'
      )
      .subscribe((resp: any) => {
        let resul: Producto[] = resp;
        console.log(resul);
        this.productos = resul;
        this.loading = false;
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  loading = true;
  productos: Producto[] = [];
  filter: Producto[] = [];
  constructor(private http: HttpClient) {
    this.loadProduct();
  }

  private loadProduct() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          'https://angular-html-e3874-default-rtdb.firebaseio.com/productos_idx.json'
        )
        .subscribe((resp: Producto[] | any) => {
          this.productos = resp;
          this.loading = false;
        });
      resolve(true);
    });
  }

  getProduct(id: String) {
    return this.http.get(
      `https://angular-html-e3874-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  findProduct(valor: string) {
    if (this.productos.length === 0) {
      this.loadProduct().then(() => {
        this.filterProduct(valor);
      });
    } else {
      this.filterProduct(valor);
    }
  }

  private filterProduct(valor: string) {
    console.log(this.productos);
    this.filter = [];
    valor = valor.toLowerCase();

    this.productos.forEach((prod) => {
      const tituloLower = prod.titulo.toLowerCase();

      if (
        prod.categoria.indexOf(valor) >= 0 ||
        tituloLower.indexOf(valor) >= 0
      ) {
        this.filter.push(prod);
      }
    });
  }
}

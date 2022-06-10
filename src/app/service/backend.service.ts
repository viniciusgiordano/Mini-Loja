import { Injectable } from '@angular/core';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  produtos: Produto[] = [ 
    {id:1,
      descricao:'Xiaomi Smartphone Redmi 9 Dual Chip 64GB 4GB RAM Carbon Grey - Cinza',
      preco:900,
      imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14i2epZe2ARVy_gX6QIo78RGs7TrlgRte-g&usqp=CAU"
    }
  ]

  constructor() { }

  getProdutos(){
    return this.produtos
  }
}

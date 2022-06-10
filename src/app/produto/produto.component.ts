import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { Produto } from '../service/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[]=[]

  constructor(private backend: BackendService ) { }

  ngOnInit(): void {
    this.produtos = this.backend.getProdutos()
  }

}

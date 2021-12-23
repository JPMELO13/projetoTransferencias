import { Router } from '@angular/router';
import { Transferencia, TransferenciasService } from './../../servicos/transferencias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  transferencia:Transferencia={
    id_transferencia: '',
    nomeCliente: '',
    valor:0,
    contaCliente: ''
  }

  constructor(private TransferenciasService:TransferenciasService, private router:Router ) { }

  ngOnInit(): void {
  }

  adicionar(){
    //deletamos o atributo id_tarefas já que é criado no banco de dados
    delete this.transferencia.id_transferencia

    this.TransferenciasService.cadastrarTransferencia(this.transferencia).subscribe({
      next:(resultado)=>{console.log("Tarefa Cadastrada com sucesso!")},
      error:(e)=> console.error(e),
      complete:()=> console.info("Cadastro completo!")
    })

    this.router.navigate(['/'])
  }

}

import { Router } from '@angular/router';
import { Transferencia, TransferenciasService } from './../../servicos/transferencias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  ListarTransferencias:Transferencia[]

  constructor( private TransferenciasService:TransferenciasService, private router:Router) {
    this.ListarTransferencias =[]
   }

  ngOnInit(): void {
    this.listarTransferencias()
  }

  listarTransferencias(){
    this.TransferenciasService.listarTransferenciasGet().subscribe({
      next: (resultado) => {console.log(resultado),
                            this.ListarTransferencias = <any>resultado},
      error:(e)=> console.error(e),
      complete: () => console.info('Transferencias Listadas')
    })
  }

  excluir(idTransferencia:any){
    this.TransferenciasService.deletarTransferencia(idTransferencia).subscribe({
      next: (resultado)=> {console.log("Tarefa Excluida"),
                            this.listarTransferencias()},
      error:(e)=>console.error(e),
      complete:()=>console.info("Exclusão completa")
    })
  }

  editar(idTransferencia:any){
    this.router.navigate([`/modificar/${idTransferencia}`])
  }
}

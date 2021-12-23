import { Transferencia, TransferenciasService } from './../../servicos/transferencias.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {



  transferencia:Transferencia={
    id_transferencia:"",
    nomeCliente: "",
    valor: 0,
    contaCliente: ""
  }

  constructor(private TransferenciaService:TransferenciasService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <any>this.activatedRoute.snapshot.params['id']
    this.TransferenciaService.listarUmaTransferencia(id_entrada).subscribe({
      next: (resultado)=> { console.log(resultado)
                            this.transferencia=resultado
                            console.log(this.transferencia.id_transferencia)},
      error:(e)=>console.error(e),
      complete:()=>console.info('Transferência resgatada')
    })

  }

  modificar(){
    this.TransferenciaService.editarTransferencia(this.transferencia.id_transferencia, this.transferencia).subscribe({
      next:(resultado)=>{ console.log("Transferencia Editada")
                          console.log(resultado)},
      error:(e)=>console.error(e),
      complete:()=>console.info("Edição completa")
    })
    this.router.navigate(["/"])
  }

}

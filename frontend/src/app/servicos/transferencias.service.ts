
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  url='/transferencias'

  constructor(private http: HttpClient) { }

  // criação das rotinas do back vinculadas às suas rotas de acordo com os métodos do Http(get,post,put,delete..)

  listarTransferenciasGet(){
    return this.http.get(this.url)
  }

  listarUmaTransferencia( idTransfer:any){
    return this.http.get(this.url + '/' + idTransfer)
  }

  cadastrarTransferencia( transfer:any){
    return this.http.post(this.url, transfer)
  }

  deletarTransferencia( idTransfer:any){
    return this.http.delete(this.url + '/' + idTransfer)
  }

  editarTransferencia(idTransfer:any, transfer:Transferencia){
    return this.http.put(this.url + '/' + idTransfer, transfer)
  }

}

export interface Transferencia{
  id_transferencia?:string
  nomeCliente?:string
  valor?:number
  contaCliente?:string
}

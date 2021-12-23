const rotas = require("express").Router()

const conexao = require("./config/conexao")

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

//rota para listar os dados do database
rotas.get('/', (req,res)=>{
    let sql = 'select * from tb_transferencias'
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro) throw erro
        res.json(rows)
    })
})

//rota para mostrar apenas uma tarefa de acordo com o seu id

rotas.get('/:id', (req,res)=>{
    const {id} = req.params
    let sql = 'select * from tb_transferencias where id_transferencia = ?'
    conexao.query(sql,[id],(erro,rows,fields)=>{
        if(erro) throw erro
        res.json(rows[0])
    })
})

//deleta
rotas.delete('/:id', (req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_transferencias where id_transferencia = '${id}'`
    conexao.query(sql,[id],(erro,rows,fields)=>{
        if(erro) throw erro
        res.json({status:'transferencia excluída com sucesso'})
    })
})

//insere
rotas.post('/' , urlencodedParser, (req,res)=>{
    const {nomeCliente,valor,contaCliente} = req.body
    let sql = `insert into tb_transferencias(nomeCliente,valor,contaCliente) values('${nomeCliente}', '${valor}','${contaCliente}')`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro) throw erro
        res.json({status:"transferencia incluída com sucesso"})
    })
})

//edita
rotas.put('/:id', urlencodedParser, (req,res)=>{
    const {id} = req.params
    const {nomeCliente,valor,contaCliente} = req.body
    let sql = `update tb_transferencias
               set nomeCliente = '${nomeCliente}',
               valor = '${valor}',
               contaCliente = '${contaCliente}'
               where id_transferencia = ${id}`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro){
            console.log("ERRO NO PUT(EDIT)");
            throw erro
        } 
        res.json({status:"transferencia editada com sucesso"})
    })
})

module.exports = rotas
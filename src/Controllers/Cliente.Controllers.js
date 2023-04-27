const Cliente = require('../models/Clientes');
module.exports ={
   
    // cria cliente
    async create(req,res){
     
      const {nome_completo, email,data_nascimento,cpf} = req.body;
     
     
     
      if(cpf.length < 14 || cpf.length > 14){
        res.status(401).json({
          error:false,
          message:"CPF invalido!"
       }) 
     }


       if(nome_completo ==="" || email ==="" || data_nascimento ==="" || cpf ===""){
        return res.status(401).json({
            error:false,
            message:"Preencha os campos corretamente!"
         }) 

        
       }
      
       const clientes = await Cliente.create(req.body)
         if(clientes){
            return res.status(200).json({
                error:false,
                message:"Cliente cadastrado com sucesso!"
             })
        }else{
            return res.status(401).json({
                error:true,
                message:"Cliente não cadastrado com sucesso!"
             }) 
        }     
    
    
    
   },
   // Listar cliente
   async read(req,res){
    
    const clientes = await Cliente.findAll();
     if(clientes){
        return res.status(200).json({
            error:false,
            message:"Clientes encontrado!",
            Clientes: clientes 
        })
     }else{
        return res.status(200).json({
            error:false,
            message:"Nenhum  Cliente  encontrado!",
           
        }) 
     }

   },
   // Listar um cliente
   async read_id(req,res){
     const { id } = req.params; 
     
     const cliente = await Cliente.findAll({
        where:{
            id:id
        }
     })
     if(cliente){
        return res.status(200).json({
            error:false,
            message:"Cliente encontrado!",
            Cliente: cliente 
        })
     }else{
        return res.status(401).json({
            error:false,
            message:"Nenhum  Cliente encontrado!",
            
        }) 
     }

     
   },
   
   // no caso não deu certo muito por cpf ser uma string 
   async read_cpf(){
    const { cpf } = req.params;
    const cliente = await Cliente.findAll({
        where:{
            cpf: cpf
        }
     })
     if(cliente){
        return res.status(200).json({
            error:false,
            message:"Cliente encontrado!",
            Cliente: cliente 
        })
     }else{
        return res.status(401).json({
            error:false,
            message:"Nenhum  Cliente encontrado!",
            
        }) 
     }
   },

   //Atualiza um dado do cliente especifico
 async  update(req,res){
    const { id } = req.params; 
    const {email} = req.body;
    const cliente  = await Cliente.update({email:email},{
        where:{
           id: id 
        }
    })
    if(cliente){
        return res.status(200).json({
            error:false,
            message:"Cliente Atualizado com sucesso!",
            email:email 
        })
    }else{
        return res.status(401).json({
            error:false,
            message:"Cliente não encontrado ou id inválido!",
            email:email 
        }) 
    }



   },

 // Apaga cliente 
   async Delete(req,res){
    const { id } = req.params; 
    const cliente  = await Cliente.destroy({
        where:{
           id: id 
        }
    })
    if(cliente){
        return res.status(200).json({
            error:false,
            message:"Cliente Deletado com sucesso!",
            
        })
    }


   }


}
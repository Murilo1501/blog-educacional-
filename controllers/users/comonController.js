const { ObjectId } = require('mongodb');
const ComonUserModel = require('../../models/users/comonModel');

class ComonController{

    static async index(req,res){
        try{
            const users =  await ComonUserModel.read() ;
            res.status(200).send(users);
        }catch(err){
            console.log(err)
        }
    }

    static async store(req,res){
        try{
                try {
                    const data = req.body;
                    await ComonUserModel.create(data);

                   return  res.status(201).send('usuário inserido com sucesso');
                } catch (error) {
                    console.error('Erro ao inserir documento:', error);
                } finally {
                    // Fecha a conexão com o banco de dados
                    db.close();
                }
        }catch(err){

        }
    }

    static async update(){
        try{

        }catch(err){

        }
    }

    static async delete(req,res){
        try{
            
            const {id} = req.params;
            const idObject = new ObjectId(id);
            //await db.collection('users').deleteOne({_id:idObject});
            await ComonUserModel.delete(idObject);

            res.status(200).send('usuário de id:'+ id + 'foi deletado');
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = ComonController;
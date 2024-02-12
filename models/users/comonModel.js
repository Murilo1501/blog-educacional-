
const mongoose = require('./../../database/dbconn');
const userSchema = require('./../../schemas/userSchema');


const UserModel = mongoose.model('User',userSchema);


class ComonUserModel{
    static async create(data){
        const newUser = new UserModel(data);
        
        newUser.save()
    }

    static async read(){
        const users = await UserModel.find();
        return users;
    }
x
    static async update(data,id){

       console.log(data['name'])


        await UserModel.updateOne({_id:id}, {$set:data});
    }

    static async delete(id){
        await UserModel.deleteOne({_id:id});
    }
}


module.exports = ComonUserModel;
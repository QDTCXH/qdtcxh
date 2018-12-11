const mongoose = require('./mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
  username:{type:String},
  userpass:{type:String}

})

let UserModel = mongoose.model('logindata',UserSchema)

module.exports = {
    /**
     * add
     * @param uObj
     * @param cb
     */
    add(uObj,cb){
        var user = new UserModel(uObj)
        user.save(cb)
    },
    delete(w,cb){
        UserModel.deleteOne(w,cb)
    },
    update(w,obj,cb){
        UserModel.update(w,obj,cb)
    },
    find(w,cb){
        UserModel.find(w,cb)
    },
    findpage(w,pIndex,pSize,cb){
        UserModel.find(w).skip(pIndex*pSize).limit(pSize).exec(cb)
    }
}


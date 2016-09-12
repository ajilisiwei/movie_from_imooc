var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BookSchema=new Schema({
    name:String,
    summary:String,
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
});

mongoose.pre=('save',function(next){
    if(this.isNew){
        this.meta.createAt=Date.now();
    }else {
        this.meta.updateAt=Date.now();
    }
    next();
});

mongoose.method={

};

mongoose.statics={
    fetch:function (cb) {
        return this
            .find({})
            .sort(meta.createAt)
            .exec(cb);
    }
    ,
    findById:function (id,cb) {
        return this
            .findOne({_id:id})
            .exec(cb);
    },
    findByName:function (bookname,cb) {
        return this
            .findOne({name:bookname})
            .exec(cb);
    }
};

module.exports=BookSchema;
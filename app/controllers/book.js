var mongoose=require('mongoose');
var Book=mongoose.model('Book');

exports.new=function (req,res) {
    res.render('book_new',{
        title:'Add a new book',
        book:{}
    });
};

exports.save=function (req,res) {
    var _book;
    _book=new Book(req.body.book);
    _book.save(function (err) {
        console.log(err);
    });
    res.redirect('/admin/book/list');
};

exports.list=function (req,res) {
    Book.find({})
        .exec(function (err,thebooks) {
            if (err){
                console.log(err);
            }
            res.render('book_list',{
                title:'Books List',
                books:thebooks
            });
        })
};

exports.del=function (req,res) {
    console.log(req.query.id);
    var id=req.query.id;
    if (id){
        Book.remove({_id:id},function (err,book) {
            if(err){
                console.log(err);
                res.json({success:0});
            }
            else {
                res.json({success:1});
            }
        });
    }
};



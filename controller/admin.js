const Product = require('../models/product');

exports.getProducts=(req,res,next)=>{
    Product.findAll().then(result=>{
    res.send(result);
    }).catch(err=>{
        console.log(err);
    });
};

exports.addProducts=(req,res,next)=>{
    const title = req.body.title;
    const price = req.body.price;
    const description= req.body.description;
    console.log(req.body);

    Product.create({
        title:title,
        price:price,
        description:description
    }).then(result=>{
    res.send('Data Added Succesfully');
    }).catch(err=>{
        console.log(err);
    });
};

exports.getProductById=(req,res,next)=>{
    const ProdId = req.params.id;
    console.log('id>>',ProdId)
    Product.findAll({where :{id:ProdId}}).then(result=>{
    res.send(result);
    }).catch(err=>{
        console.log(err);
    });
};


exports.deleteProductById=(req,res,next)=>{
    const ProdId = req.params.id;
    console.log('id>>',ProdId)
    Product.destroy({where :{id:ProdId}}).then(result=>{
    res.send('product deleted');
    }).catch(err=>{
        console.log(err);
    });
};

exports.updateProductById=(req,res,next)=>{
    const ProdId = req.params.id;

    const title = req.body.title;
    const price = req.body.price;
    const description= req.body.description;
    console.log(req.body);

    Product.findAll({where :{id:ProdId}}).then(product=>{
    product[0].title=title;
    product[0].price=price;
    product[0].description=description;
    product[0].save();
    res.send('updated succesfully');

    }).catch(err=>{
        console.log(err);
    });
};

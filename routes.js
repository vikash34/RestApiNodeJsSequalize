const express =require('express');
const admin =require('./controller/admin');


const router = express.Router();

router.get('/products',admin.getProducts);
router.post('/add_product',admin.addProducts);
router.get('/products/:id',admin.getProductById);
router.get('/delete/:id',admin.deleteProductById);
router.post('/update/:id',admin.updateProductById);


router.get('/',(req,res,next)=>{
    res.send("Welcome to node js api,\n get all products:  http://localhost:3000/products,\n Get products by id : http://localhost:3000/products/id\n add product (post:{'title':'DBMS','price':150.60,'description':1083764} :  http://localhost:3000/add_product  ),\n Update product (post:{'title':'DBMS','price':150.60,'description':1083764} :  http://localhost:3000/update_product/id  ),\n");

});

router.use((req,res,next)=>{
    res.send('error 404');
});


module.exports=router;
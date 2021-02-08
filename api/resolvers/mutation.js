const {ForbiddenError,AuthenticationError} = require('apollo-server-express');
const fs = require('fs');
const path = require('path');

const storeFS =async ({ stream, filename }) => {
    const uploadDir = '../public/images/';
    filename = `${Date.now()}-${filename.toLowerCase() }`
    const fileName = path.join(__dirname,uploadDir,filename);

    return await new Promise((resolve, reject) =>
        stream.on('error', error => {
                if (stream.truncated) // delete the truncated file
                  fs.unlinkSync(fileName);
                  reject(error);
            })
            .pipe(fs.createWriteStream(fileName))
            .on('error', error => reject(error))
            .on('finish', () => resolve({ filename }))
    );
}

module.exports ={
  test:()=> 'Testing if this is working just fine',
  userSignUp:async (parent,{username,firstName,lastName,password,telephone,country,city,district},{models})=> {
   
    const  user  = await models.user.create({username,firstName,lastName,password,telephone});

    if(user.id){
    let  userId= user.id;
     const cart = await models.cart.create({userId});
     await models.address.create({userId,country,city,district});

     if(cart){
       return user;
     }else{
     throw new ForbiddenError('Error occured while creating use cart')
     }

    }else{
     throw new ForbiddenError('User name has been taken already')
    }

  },
  
  userSignIn:async (parent,{username,password,telephone},{models})  => await models.user.findOne({where:{username,password}}),
  createProduct:async (parent,{name,description,price,image,userId,categoryId},{models})=> {

    const { filename,createReadStream } = await image;
    const stream = createReadStream();
    const result = await storeFS({ stream, filename });
    const imageUrl  = result.filename;

   return  await models.product.create({name,description,price,imageUrl,userId,categoryId});
  },
  addToCart:async (parent,{userId,cartId,productId},{models})=> await models.cartItem.create({cartId,productId}),
  
  incrementCart:async (parent,{cartItemId,userId},{models}) => {
    await models.cartItem.increment('quantity',{where:{id:cartItemId}});
    return await models.cart.findOne({where:{userId}});
  },
  decrementCart:async (parent,{userId,cartItemId},{models}) => {
    await models.cartItem.decrement('quantity',{where:{id:cartItemId}})
    return await models.cart.findOne({where:{userId}})
  },
 removeFromCart:async (parent,{userId,cartItemId},{models})=>{
    await models.cartItem.destroy({where:{id:cartItemId}});
    return await models.cart.findOne({where:{id:userId}})
  },
  createOrder:async (parent,{userId,price,quantity,cartItemId},{models}) => {

    const order = await models.order.create({userId});

    const orderId = order.id;

    await models.orderItem.create({price,quantity,cartItemId,orderId});
   
    return await models.order.findOne({where: {id:orderId}});

  },
  userAddress:async (parent,{userId,country,city,district},{models}) => await models.address.create({userId,country,city,district}),

  userDetails:async (parent,{userId},{models}) => await models.user.findOne({where:{id:userId}}),
 
}


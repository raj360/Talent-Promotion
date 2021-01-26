const {ForbiddenError,AuthorizationError} = require('apollo-server-express');

module.exports ={
  test:()=> 'Testing if this is working just fine',
  userSignUp:async (parent,{username,firstName,lastName,password,telephone},{models})=> {
   
    const  user  = await models.user.create({username,firstName,lastName,password,telephone});

    if(user.id){
     const cart = await models.cart.create({userId:user.id});
    
     if(cart){
       return user;
     }else{
     throw new ForbiddenError('Error occured while creating use cart')
     }

    }else{
     throw new ForbiddenError('User name has been taken already')
    }

  },
  userSignIn:async (parent,{username,password},{models})  => await models.user.findOne({where: {username,password}}),
  createProduct:async (parent,{name,description,price,image,userId,productCategoryId},models)=> {
   let result  =  await models.product.create({where: {name,description,price,image,userId,productCategoryId}});

   return result;
  },
  createCart:async (parent,{quantity,price,cartId,productId})=> await models.cartItem.create({quantity,price,cartId,productId}),
  incrementCart:async (parent,{cartItemId},{models}) => await models.cartItem.increment('quantity',{where:{cartItemId}}),
  decrementCart:async (parent,{cartItemId},{models}) => await models.cartItem.decrement('quantity',{where:{cartItemId}}),
  removeCart:async (parent,{cartItemId},{models}) => await models.cartItem.destroy({where:{cartItemId}}),
  createOrder:async (parent,{userId,price,quantity,cartItemId},{models}) => {

    const order = await models.order.create({userId});
    
    const orderId = order.id;

    await models.orderItem.create({price,quantity,cartItemId,orderId});
   
    return await models.order.findOne({where: {id:orderId}});

  }
   
  
}
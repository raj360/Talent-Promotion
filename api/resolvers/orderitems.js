module.exports ={
  cartItems:async ({cartItemId},_,{models}) => await models.cartItem.findOne({where: {id:cartItemId}}),
}




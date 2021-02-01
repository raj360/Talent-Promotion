module.exports ={
  cartItems:async ({id},_,{models}) => await models.cartItem.findAll({where: {cartId:id}}),

}






 
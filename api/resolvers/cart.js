module.exports ={
  cartDetails:async ({id},_,{models}) => await models.cartItem.findAll({where: {cartId:id}}),

}






 
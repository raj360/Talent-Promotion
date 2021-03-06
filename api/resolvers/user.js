const Sequelize = require('sequelize'); 
const Op = Sequelize.Op;


module.exports ={
  products:async ({id},args,{models})=>  await models.product.findAll({where:{userId:id,status:1}}),
  cart:async ({id},args,{models})=> await models.cart.findOne({where:{userId:id}}),
  address:async ({id},args,{models})=>  await models.address.findOne({where:{userId:id}}),
  order:async ({id},args,{models})=>  await models.order.findAll({where:{userId:id}}),
}
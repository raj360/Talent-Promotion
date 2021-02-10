module.exports = {
  orderItems:async ({id},args,{models})=> await models.orderItem.findAll({where:{orderId:id}})
}
module.exports ={
    product:async ({productId},args,{models})=>  await models.product.findOne({where:{id:productId}})
}
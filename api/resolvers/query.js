module.exports ={
  test:() => 'Testing if this is working fine',
  products:async (parent,args,{models}) =>  await models.product.findAll(),
  product:async (parent,{productId},{models}) => await models.product.findOne({where:{id:productId}})
 
}
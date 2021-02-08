module.exports ={
  test:() => 'Testing if this is working fine',
  products:async (parent,args,{models}) =>  await models.product.findAll(),
 
}
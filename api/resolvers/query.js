module.exports ={
  test:() => 'Testing if this is working fine',
  products:async (parent,args,{models}) =>  await models.product.findAll({where:{status:1}}),
  product:async (parent,{productId},{models}) => await models.product.findOne({where:{id:productId}}),
  user: async (parent,{userId},{models}) => await models.user.findOne({where:{id:userId}}),
  categories:async (paretn,args,{models})  => await models.category.findAll({order:[['name','ASC']]}),
}

/**_address
 * 
 * order: [['description', 'DESC']],
        attributes: ['id', 'description']
 */
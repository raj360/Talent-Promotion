module.exports ={
  category:async ({categoryId},args,{models}) => await models.category.findOne({where:{id:categoryId}}),
  owner:async ({userId},args,{models}) =>  await models.user.findOne({where:{id:userId}}),
}
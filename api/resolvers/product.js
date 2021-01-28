module.exports ={
  category:async ({categoryId},args,{models}) => await models.category.findOne({where:{id:categoryId}})
}
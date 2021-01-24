const {gql} = require('apollo-server-express');

module.exports =gql`

scalar DateTime

 type Query{
   test:String
 }
 
 type Mutation{
   test:String
 }

 type User{
   id:Int
   username:String
   firstName:String
   lastName:String
   telephone:String
   products:[Product!]
 }


 type Product{
   id:Int
   name:String
   description:String
   prince:Float
   image:String
   owner:User
   createdAt:DateTime
   updatedAt:DateTime
 }

type  cart{
  id:Int
  user:User
  cartDetails:CartDetails
}

type CartDetails{
  id:Int
  status:String
  quantity:Int
  product:Product
   createdAt:DateTime
   updatedAt:DateTime
}

type Order{
  id:Int
  user:User
  orderDetails:OrderDetails
}

type OrderDetails{
  id:Int
  price:Int
  quantity:Int
  product:Product
  createdAt:DateTime
  updatedAt:DateTime
}
`;
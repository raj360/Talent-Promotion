const {gql} = require('apollo-server-express');



module.exports =gql`

scalar DateTime

 type Query{
   test:String!
   products:[Product!]
   product(productId:Int!):Product
   user(userId:Int!):User
   categories:[Category!]

 }

 type Response {
   error:Boolean
   message:String!
 }
 
 type Mutation{
   test:String!
   userSignUp(username:String!,firstName:String!,lastName:String!,password:String!,telephone:String!,country:String!,city:String!,district:String!):User!
   userSignIn(username:String!,telephone:String!,password:String!):User
   createProduct(name:String!,description:String!,price:Float!,image:Upload!,userId:Int!,categoryId:Int!):Product
   addToCart(cartId:Int!,productId:Int!):Cart
   incrementCart(userId:Int!,cartItemId:Int!):Cart
   decrementCart(userId:Int!,cartItemId:Int!):Cart
   removeFromCart(userId:Int!,cartItemId:Int!):Cart
   createOrder(userId:Int!,price:Float,quantity:Int!,cartItemId:Int!):Order,
   userAddress(userId:Int!,country:String!,city:String!,district:String!):Address,
   userDetails(userId:Int!):User
   removeProduct(productId:Int!,userId:Int!):User
   makeOrder(userId:Int!,productIds:[Int!]!,quantities:[Int!]!):User
 }




 type User{
   id:Int!
   username:String!
   firstName:String!
   lastName:String!
   telephone:String!
   address:Address
   products:[Product!]
   cart:Cart
   order:[Order!]
 }

 

 type Address{
   id:Int!
   country:String!
   district:String!
   city:String!
 }


 type Product{
   id:Int!
   name:String!
   description:String!
   price:Float
   imageUrl:String!
   owner:User
   category:Category
   createdAt:DateTime
   updatedAt:DateTime
 }



 type Category{
   id:Int!
   name:String!
 }

type  Cart{
  id:Int!
  user:User
  cartItems:[CartItems!]
}

type CartItems{
  id:Int!
  status:String!
  quantity:Int!
  product:Product
  createdAt:DateTime
  updatedAt:DateTime
}


type Order{
  id:Int!
  user:User
  orderItems:[OrderItems]
  createdAt:DateTime!
}

type OrderItems{
  id:Int!
  cartItems:CartItems!
  createdAt:DateTime
  updatedAt:DateTime
}


`;
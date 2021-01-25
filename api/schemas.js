const {gql} = require('apollo-server-express');

module.exports =gql`

scalar DateTime

 type Query{
   test:String
 }

 type Response {
   error:Boolean
   message:String
 }
 
 type Mutation{
   test:String
   userSignUp(username:String,firstName:String,lastName:String,password:String,telephone:String):User
   userSignIn(username:String,telephone:String,password:String):User
   createProduct(name:String,description:String,prince:Float,image:Upload,userId:Int,productCategoryId:Int):Product
   createCart(quantity:Int,price:Float,cartId:Int,productId:Int):Cart
   incrementCart(cartItemId:Int,quantity:Int,price:Float,userId:Int):CartDetails
   decrementCart(cartItemId:Int,quantity:Int,price:Float,userId:Int):CartDetails
   removeCart(cartItemId:Int):CartDetails
   createOrder(userId:Int,price:Float,quantity:Int):Order
 }

 type User{
   id:Int
   username:String
   firstName:String
   lastName:String
   telephone:String
   address:Address
   products:[Product!]
 }

 type Address{
   id:Int
   country:String
   district:String
   city:String
 }

 type Product{
   id:Int
   name:String
   description:String
   prince:Float
   image:String
   owner:User
   category:Category
   createdAt:DateTime
   updatedAt:DateTime
 }


 type Category{
   id:Int
   name:String
 }

type  Cart{
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
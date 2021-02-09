import React, { useState } from "react";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import {connect} from 'react-redux';
import {useQuery,useMutation} from '@apollo/client';
import CustomerSideBar from "../customerSideMenu/customerSide";
import FormInput from "../textInput/formInputComponent";
import {CATEGORIES} from '../graphql/query';
import {selectorUser} from '../../redux/user/userSelector';
import {createStructuredSelector} from 'reselect';
import {CREATE_AD} from '../graphql/mutation';
import CustomButton from "../customButton/customButton";
import Textarea from "../textInput/textarea";
import "./customerDetails.scss";


const CreateAds = ({user}) => {
   const userId = user.id;

  const {data} = useQuery(CATEGORIES)
  const [createProduct,{loading,error}] = useMutation(CREATE_AD,{
    onCompleted: data=> {
      if(data){
         window.alert('You add has been created succesfuly')
      }
    }
  })


  const [values, setValues] = useState({
    name: "",
    price: "",
    description:"",
    categoryId:1,
    userId
  });


  const handleSubmit = (e) => {
    e.preventDefault();
      if(Object.keys(values).length == 6){
        createProduct({variables:{...values}})
      }else{
        window.alert('All inputs are required..')
      }
  };

  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { 
    setValues({...values,image:file});
  }
  
  // receives array of files that are done uploading when submit button is clicked

  const handleChange = (e) => {
    const { name, value } = e.target;
     if(name === 'price'){
       setValues({ ...values, [name]: parseFloat(value) });
     }else if(name === 'categoryId'){
       setValues({ ...values, [name]: Number(value) });
     }else{
       setValues({ ...values, [name]: value });
     }
  };


  const {
    price,
    description,
    name
  } = values;

  return (
    <div className="detail">
      <div className="menu">
        <CustomerSideBar />
      </div>

      <div className="tabledata">
        <form id="form-detail" onSubmit={handleSubmit}>
          

     <Dropzone
      onChangeStatus={handleChangeStatus}
       maxFiles={1}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250,color:'#000000' } }}
    />
  
          <FormInput
            type="text"
            name="name"
            value={name}
            label="Item Name"
            onChange={handleChange}
            required
          />

        
          <FormInput
            type="number"
            name="price"
            value={price}
            label="Price"
            onChange={handleChange}
          />


          <Textarea
            type="text"
            name="description"
            value={description}
            label="Product description"
            onChange={handleChange}
          />

          {
            data && 
            (
  <div className="group">
      <p className="form-input">Category</p>
      <select className="form-input" name="categoryId" onChange={handleChange} >
        <option disabled defaultValue>Select Category</option>
        {
          data.categories.map(option => (<option key={option.id} value={option.id}>{option.name}</option>))
        }
      </select>
    </div>

            )
          }
    <CustomButton >Create Add</CustomButton>
        </form>
       
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user:selectorUser
})


export default connect(mapStateToProps,)(CreateAds)




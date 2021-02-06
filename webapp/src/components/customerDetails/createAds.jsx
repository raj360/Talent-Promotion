import React, { useState } from "react";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import CustomerSideBar from "../customerSideMenu/customerSide";
import FormInput from "../textInput/formInputComponent";
import CustomButton from "../customButton/customButton";
import Textarea from "../textInput/textarea";
import "./customerDetails.scss";

const CreateAds = (props) => {


  const [values, setValues] = useState({
    name: "",
    price: "",
    description:""
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { state } = props.location;
  //   window.location = state ? state.from.pathname : "/";
  // };

  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }



  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const {
    price,
    description,
    name
  } = values;
  // const { username, email, contact, firstname, lastName } = customer;

  return (
    <div className="detail">
      <div className="menu">
        <CustomerSideBar />
      </div>

      <div className="tabledata">
        <form id="form-detail" onSubmit={handleSubmit}>
          

     <Dropzone
      getUploadParams={getUploadParams}
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
           style={{width:500}}
            type="text"
            name="description"
            value={description}
            label="Product description"
            onChange={handleChange}
          />

        </form>
        <CustomButton>Create Add</CustomButton>
        {/* <button form="form-detail">submit</button> */}
      </div>
    </div>
  );
};

export default CreateAds;

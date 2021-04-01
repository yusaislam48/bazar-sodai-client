import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideBar from '../SideBar/SideBar';

const AddProduct = () => {
    document.title = "Add Product";
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageUrl: imageUrl
        }
        fetch('https://bazar-sodai01.herokuapp.com/addProduct', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        })
        .then(res => {
            console.log('server site res', res)
        })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'a58da14904622c7db2663f8c5fda2762');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    return (
        <div className='container mb-4'>
            <div className="row">
            <div className='col-md-3 mb-4'>
                <SideBar></SideBar>
            </div>
            <div className='col-md-9'>
            <h3 style={{fontWeight: "700", color:"gray"}}>Add Product</h3><br/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-6">
                    <label className="form-label">Product Name</label>
                    <input className="form-control mb-2" name="name" placeholder='Product Name' ref={register} />
                </div>
                <div className="col-6">
                    <label className="form-label">Price</label>
                    <input className="form-control mb-2" placeholder='Price' name="price" ref={register} />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <label className="form-label">Weight</label>
                    <input className="form-control mb-2" placeholder='Weight' name="weight" ref={register} />
                </div>
                <div className="col-6">
                    <label className="form-label">Add Photo <span style={{color:'#71BA58'}}>(Wait 10-15 sec)</span></label>
                    <input className="form-control mb-2" name="image" type="file" onChange={handleImageUpload} />
                </div>
            </div>
            <button type="submit" className="btn btn-success">Add Product</button>

            </form>
            </div>
            </div>
        </div>
    );
};

export default AddProduct;
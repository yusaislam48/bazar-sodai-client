import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageUrl: imageUrl
        }
        console.log(productData)
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
        <div className='container'>
            <h2>This is add product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-6">
                    <label for="formFile" class="form-label">Product Name</label>
                    <input class="form-control mb-2" name="name" defaultValue="test" ref={register} />
                </div>
                <div className="col-6">
                    <label for="formFile" class="form-label">Price</label>
                    <input class="form-control mb-2" placeholder='price' name="price" ref={register} />
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <label for="formFile" class="form-label">Weight</label>
                    <input class="form-control mb-2" placeholder='weight' name="weight" ref={register} />
                </div>
                <div className="col-6">
                    <label for="formFile" class="form-label">Add Photo</label>
                    <input class="form-control mb-2" name="image" type="file" onChange={handleImageUpload} />
                </div>
            </div>
            <button type="submit" class="btn btn-success">Add Product</button>

            </form>
        </div>
    );
};

export default AddProduct;
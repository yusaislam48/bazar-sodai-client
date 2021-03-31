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
        fetch('http://localhost:4000/addProduct', {
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
                <input name="name" defaultValue="test" ref={register} />
                <input name="price" defaultValue="130" ref={register} />
                <input name="weight" defaultValue="130" ref={register} />
                <input name="image" type="file" onChange={handleImageUpload} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
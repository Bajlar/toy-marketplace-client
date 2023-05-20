import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
  const userUpdateToy = useLoaderData();
  // console.log(userUpdateToy);
  const {
    _id,
    category,
    details,
    email,
    photo,
    price,
    quantity,
    rating,
    sellerName,
    toyName
  } = userUpdateToy;

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateToys = {
      photo,
      toyName,
      sellerName,
      email,
      category,
      price,
      rating,
      quantity,
      details
    };
    // console.log(updateToys);

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: "Success!",
            text: "Updated toy Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-2 md:py-4 md:px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Update Toys</h2>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Picture URL of the toy
                </span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Picture URL of the toy"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Toy Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="toyName"
                  defaultValue={toyName}
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Seller Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={sellerName}
                  placeholder="Seller Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Seller Email
                </span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Sub-category
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Sub-category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Rating
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Available quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-2 gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-2xl font-semibold">
                  Detail description
                </span>
              </label>
              <textarea
                name="details"
                id=""
                cols="30"
                rows="10"
                defaultValue={details}
                placeholder="Detail description"
                className="input input-bordered w-full"
              ></textarea>
            </div>
          </div>
          <div className="text-center my-7">
            <input
              type="submit"
              className="btn btn-secondary capitalize"
              value="Update Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
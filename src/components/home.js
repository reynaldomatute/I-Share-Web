import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
//const [products, setProducts] = useState();
const [category, setCategory] = useState();
const [description, setDescription] = useState()

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/1")
      .then(function (response) {
        // handle success
        console.log(response);
        setCategory(response.data.category)
        setDescription(response.data.description);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  });
  return (
    <>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">category</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={category} id="staticEmail" />
          </div>
        </div>
      </form>

      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" value={description} id="staticEmail" />
          </div>
        </div>
      </form>
    </>
  );
}

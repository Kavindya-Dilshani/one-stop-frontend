
import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import { ProductsService } from '../../shared/services/product.service';
import { Formtable } from '../../components/form-table/Formtable';
import axios from 'axios';

export const AdminDashboard = () => {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    product_id: '',
    product_name: '',
    product_price: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    category: '',
    product_id: '',
    product_name: '',
    product_price: '',
    _id: '',
  });

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const getProductsHandler = async () => {
      const allProducts = await ProductsService.getProducts();
      if (allProducts?.data) {
        setDataList(allProducts.data);
      }
    };
    getProductsHandler();
  }, []);

  const handleSubmitHandler = async (e: any) => {
    e.preventDefault();
    const response = await ProductsService.addProduct(formData);

    if (response?.success) {
      setAddSection(false);
      alert(response.message);
      const allProducts = await ProductsService.getProducts();
      if (allProducts) {
        setDataList(allProducts.data);
      }
      setFormData({
        category: '',
        product_id: '',
        product_name: '',
        product_price: '',
      });
    }
  };

  const handleOnChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDelete = async (_id: string) => {
    const data = await ProductsService.deleteProduct(_id);
    if (data.data.success) {
      console.log(data)
      alert(data.data.message);
    }
  };

  const handleUpdate = async () => {
    const data = await ProductsService.updateProduct(formDataEdit);
    if (data.success) {
      alert(data.message);
      setEditSection(false);
      const allProducts = await ProductsService.getProducts();
      if (allProducts) {
        setDataList(allProducts.data);
      }
    }
  };

  const handleEditOnChange = (e: any) => {
    const { value, name } = e.target;
    setFormDataEdit((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = (data: any) => {
    setFormDataEdit(data);
    setEditSection(true);
  };

  return (
    <div className="admin-container">
      <button className="btn btn-success" onClick={() => setAddSection(true)}>
        +Add
      </button>

      {addSection && (
        <Formtable
          handleSubmit={handleSubmitHandler}
          handleOnChange={handleOnChangeHandler}
          handleClose={() => setAddSection(false)}
          rest={formData}
        />
      )}

      {editSection && (
        <Formtable
          handleSubmit={handleUpdate}
          handleOnChange={handleEditOnChange}
          handleClose={() => setEditSection(false)}
          rest={formDataEdit}
        />
      )}

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Product_id</th>
              <th>Product_name</th>
              <th>Product_price</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {dataList?.length > 0 ? (
              dataList.map((data: any, key) => {
                return (
                  <tr key={key}>
                    <td>{data.category}</td>
                    <td>{data.product_id}</td>
                    <td>{data.product_name}</td>
                    <td>{data.product_price}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleEdit(data)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={5}>No Data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};



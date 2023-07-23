
import axios, { AxiosRequestConfig } from 'axios';


const getProducts = async () => {
    const api = "http://localhost:4000/get-products";
    const response = await axios.get(api).then((res) => res.data);

    if (response.success) {
        return response;
    }
};

const addProduct = async (request: any) => {
    const api = "http://localhost:4000/create-product";
    const response = await axios.post(api, request).then((res) => res.data);


    if (response.success) {
        return response;
    }
};

const updateProduct = async (request: any) => {
    const api = "http://localhost:4000/update-product";
    const response = await axios.put(api, request).then((res) => res.data);

    if (response.success) {
        return response;
    }
};

const deleteProduct = async (_id: string) => {
    const api = "http://localhost:4000/:id}";
    const response = await axios.delete(api).then((res) => res.data);

    if (response.success) {
        return response;
    }
};

export const ProductsService = { getProducts, addProduct, updateProduct, deleteProduct };
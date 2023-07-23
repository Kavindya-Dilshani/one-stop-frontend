
import { MdClose } from 'react-icons/md';

interface FormtableProps {
    handleSubmit: (e: any) => void;
    handleOnChange: (e: any) => void;
    handleClose: () => void;
    rest: {
        category: string;
        product_id: string;
        product_name: string;
        product_price: string;
    };
}

export const Formtable: React.FC<FormtableProps> = ({
    handleSubmit,
    handleOnChange,
    handleClose,
    rest,
}) => {
    return (
        <div className="addContainer">
            <form onSubmit={handleSubmit}>
                <div className="close-btn" onClick={handleClose}>
                    <MdClose />
                </div>
                <label htmlFor="category">Category :</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    onChange={handleOnChange}
                    value={rest.category}
                />

                <label htmlFor="product_id">Product_id :</label>
                <input
                    type="text"
                    id="product_id"
                    name="product_id"
                    onChange={handleOnChange}
                    value={rest.product_id}
                />

                <label htmlFor="product_name">Product_name :</label>
                <input
                    type="text"
                    id="product_name"
                    name="product_name"
                    onChange={handleOnChange}
                    value={rest.product_name}
                />

                <label htmlFor="product_price">Product_price :</label>
                <input
                    type="text"
                    id="product_price"
                    name="product_price"
                    onChange={handleOnChange}
                    value={rest.product_price}
                />

                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};


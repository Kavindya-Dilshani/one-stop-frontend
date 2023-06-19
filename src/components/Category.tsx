import './Category.css';
import { CategoryConfig } from '../utilities/config/CategoryConfig';

export const Category = () => {
    const categories = CategoryConfig.categoryList;

    return (
        <>
            <div className='row category mx-3'>
                {categories && categories.map((category, index) => {
                    return (
                        <div className='col' key={index}>
                            <div className='category'>
                                <div className='cat-image p-3 text-center'>
                                    <a className='link-category-product' href='#'>
                                        <img src={category.image} className="img-fluid" alt={category.altValue} />
                                    </a>
                                </div>
                            </div>
                            <div className='category-title text-center pt-2'>
                                <h3>{category.title}</h3>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </>
    );
}

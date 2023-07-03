import './Category.css';
import { CategoryConfig } from '../../../../utilities/config/CategoryConfig';
import { Link } from 'react-router-dom';

export const Category = () => {
    const categories = CategoryConfig.categoryList;

    return (
        <>
            <div className='row category mx-0'>
                {categories && categories.map((category, index) => {
                    return (
                        <div className='col' key={index}>
                            <div className='category'>
                                <div className='cat-image p-3 text-center'>
                                    <a className='link-category-product' href='#'>
                                        <Link to={category.path}><img src={category.image} className="img-fluid" alt={category.altValue} /></Link>
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

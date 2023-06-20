import loadCategoriesData from '@/app/utilites/loadCategoriesData';
import SingleCategories from './SingleCategories';
const  CategoriesPage =async () => {
    const categories =await loadCategoriesData()
    return (
        <div>
            <h3>categories data</h3>
            <div className='grid md:grid-cols-3 gap-7'>
                {
                    categories.map(catagorie=><SingleCategories key={catagorie.id}
                     catagorie={catagorie}
                    ></SingleCategories>)
                }
            </div>
        </div>
    );
};

export default CategoriesPage ;
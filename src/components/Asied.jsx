import React, { useState } from 'react';
import '../css/Asied.css';

const categoriesData = [
    {
        name: 'Top Offer',
        subcategories: ['Tvs & Appliances', 'Man', 'Women', 'Baby & Kids' ],
    },
    {
        name: 'Mobiles',
        subcategories: ['mi', 'RealMe', 'Samsung', 'Apple'],
    },
    {
        name: 'Fashion',
        subcategories: ['Man', 'Women', 'Baby & Kids'],
    },
    {
        name: 'Electronics',
        subcategories: ['Mobile','Mobile Accessories','Laptops','Television'],
    },
    {
        name: 'TVs & Appliances',
        subcategories: ['Washing Machine','Television','Kitchen Appliances'],
    },
];

function Asied() {
    const [activeCategory, setActiveCategory] = useState('');

    const handleCategoryHover = (category) => {
        setActiveCategory(category);
    };

    const handleLeave = () => {
        setActiveCategory('');
    };

    return (
        <>
            <div id="Asied_c1">
                {categoriesData.map((category) => (
                    <div 
                        id='category'
                        key={category.name}
                        onMouseEnter={() => handleCategoryHover(category.name)}
                        // onMouseLeave={handleLeave}
                    >
                        {category.name}
                    </div>
                ))}
            </div>

            {activeCategory && (
                <div id='Asied_c2' onMouseLeave={handleLeave} >
                    {categoriesData
                        .find((category) => category.name === activeCategory)
                        .subcategories.map((subcategory) => (
                            <p id='subcategory' key={subcategory}>{subcategory}</p>
                        ))}
                </div>
            )}
        </>
    );
}

export default Asied;

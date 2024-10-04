const FilterProduct = () => {
    const product = [
        { id: 1, title: 'iPhone-12', category: 'mobile', price: 70000 },
        { id: 2, title: 'iPhone-13', category: 'mobile', price: 80000 },
        { id: 3, title: 'iPhone-14', category: 'tablet', price: 90000 },
        { id: 4, title: 'iPhone-15', category: 'mobile', price: 100000 },
    ]
    const filterProduct = product.filter(pro => {
        return (
            pro.price > 55000 && pro.category === 'mobile'
        )
    })

    const reduseProduct = product.reduce((pre, curr) => (pre + curr.price), 0)
    return (
        <div>
            {
                filterProduct.map(product => <div key={product.id}>{product.title}</div>)
            }
            <h2>{reduseProduct}</h2>
        </div>
    );
};

export default FilterProduct;
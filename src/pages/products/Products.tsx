import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppRootStateType } from '../../redux/store'
import CustomTable from '../../components/table/CustomTable'
import { fetchProductsTC } from '../../redux/products-reducer/actions'

const Products = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state: AppRootStateType) => state.products)

    useEffect(() => {
        dispatch(fetchProductsTC())
    }, [dispatch])

    return (
        <div>
           <CustomTable categories={categories}/>
           {/* {categories.map((categorie) => {
               return <div key={categorie.rid}>{categorie.rname}</div>
           })} */}
        </div>
    )
}

export default Products

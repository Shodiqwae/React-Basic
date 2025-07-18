import { useSearchParams } from "react-router"

const ProductListPage = () => {
    const [listProduct, setListProduct] = useSearchParams();

    const handleSortValueChange = (sortValue: string) => {
        listProduct.set("sort", sortValue)

        setListProduct(listProduct)
    }
    return (
        <div>
            <h1>Product List</h1>

            <h3>sort: {listProduct.get("sort")}</h3>
            <h3>name: {listProduct.get("name")}</h3>
            <div style={{ flexDirection: 'row', gap: '10px', display: 'flex' }}>
            <button onClick={ () => handleSortValueChange("low")}>set sort status low</button>
            <button onClick={ () => handleSortValueChange("medium")}>set sort status medium</button>
            <button onClick={ () => handleSortValueChange("high")}>set sort status high</button>
            </div>

        </div>
    )
}
export default ProductListPage;
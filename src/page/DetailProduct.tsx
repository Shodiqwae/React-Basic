import { useParams } from "react-router"

const DetailProduk = () => {
    const params = useParams<{ slug: string, name: string }>()
    return (
        <>
         <div>
            <h1>Product Detail</h1>
            <p>{params.slug}</p>
            <p>{params.name}</p>
         </div>
        </>
    )
}
export default DetailProduk;
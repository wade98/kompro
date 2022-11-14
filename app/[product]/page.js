import ProductSection from '../../components/ProductSection'

function ProductPage({ productData }) {

	return (
		<div className="min-h-screen py-12 sm:pt-20">
			<ProductSection productData={productData} />
		</div>
	)
}

//getstaticpaths

//fetch products

export default ProductPage

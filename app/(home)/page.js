import StoreHeading from '../../components/StoreHeading'
import ProductListings from '../../components/ProductListings'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import '../../styles/globals.css'

function IndexPage({ products }) {

	return (<Layout>
		<SEO
			title={process.env.siteTitle}
		/>
		<div className="mx-auto max-w-6xl">
			<StoreHeading />
			<ProductListings products={products} />
		</div>
	</Layout>
	)
}

//fetch products

export default IndexPage

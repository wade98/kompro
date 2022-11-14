
import Link from 'next/link'

function BackToProductButton() {
	return (
		<Link href="/" passHref
			aria-label="back-to-products"
			className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
		>
			Back To All Products
		</Link>
	)
}

export default BackToProductButton

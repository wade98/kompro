"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Price from '/components/Price'

function CartTable({ cart }) {
	const updateCartQuantity = useUpdateCartQuantityContext()
	const [cartItems, setCartItems] = useState([])
	const [subtotal, setSubtotal] = useState(0)

	useEffect(() => {
		setCartItems(cart)
		setSubtotal(getCartSubTotal(cart))
	}, [cart])

	function updateItem(id, quantity) {
		updateCartQuantity(id, quantity)
	}

	return (
		<div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
			<table className="mx-auto">
				<thead>
					<tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
						<th className="font-primary font-normal px-6 py-4">Product</th>
						<th className="font-primary font-normal px-6 py-4">Quantity</th>
						<th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
						<th className="font-primary font-normal px-6 py-4">Remove</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-palette-lighter">
					{cartItems.map(item => (
						<tr key={item.variantId} className="text-sm sm:text-base text-gray-600 text-center">
							<td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
								<img
									src={item.productImage.originalSrc}
									alt={item.productImage.altText}
									height={64}
									width={64}
									className={`hidden sm:inline-flex`}
								/>
								<Link passHref href={`/products/${item.productHandle}`}
									className="pt-1 hover:text-palette-dark">
									{item.productTitle}, {item.variantTitle}
								</Link>
							</td>
							<td className="font-primary font-medium px-4 sm:px-6 py-4">
								<input
									type="number"
									inputMode="numeric"
									id="variant-quantity"
									name="variant-quantity"
									min="1"
									step="1"
									value={item.variantQuantity}
									onChange={(e) => updateItem(item.variantId, e.target.value)}
									className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
								/>
							</td>
							<td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
								<Price
									currency="$"
									num={item.variantPrice}
									numSize="text-lg"
								/>
							</td>
							<td className="font-primary font-medium px-4 sm:px-6 py-4">
								<button
									aria-label="delete-item"
									onClick={() => updateItem(item.variantId, 0)}
									className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter"
								>
									X
								</button>
							</td>
						</tr>
					))}
					{
						subtotal === 0 ?
							null
							:
							<tr className="text-center">
								<td></td>
								<td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
								<td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
									<Price
										currency="$"
										num={subtotal}
										numSize="text-xl"
									/>
								</td>
								<td></td>
							</tr>
					}
				</tbody>
			</table>
		</div>
	)
}

export default CartTable

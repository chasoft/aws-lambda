import { Link } from "@remix-run/react"
import * as React from "react"

export default function AboutRoute(){
	return (
		<div>
			<h1>About Us</h1>
			<p>
				Aute reprehenderit irure ea culpa ullamco dolore qui pariatur commodo fugiat do aliquip mollit ex exercitation. Irure ipsum exercitation officia eu amet elit ut nisi sunt. Commodo irure deserunt reprehenderit do nisi veniam dolor reprehenderit laborum Lorem cillum. Dolor eu aliqua ipsum qui.
			</p>
			<p>
				Irure proident veniam exercitation reprehenderit cillum Lorem culpa incididunt. Officia ex proident laborum ut anim aliqua esse irure duis labore. Irure commodo aute occaecat veniam sint et minim culpa fugiat veniam enim do. Veniam officia consectetur duis eu do enim consequat voluptate commodo aliqua. Exercitation in incididunt Lorem in ullamco nulla anim nostrud ea. Laboris ea anim ex deserunt incididunt consequat ad nostrud laborum sint incididunt aliquip aute eu. Aute officia qui officia magna proident ullamco irure et. Amet ut ut aute fugiat laborum irure irure in cupidatat in.
			</p>
			<Link to="/">
				Go Home
			</Link>
		</div>
	)
}
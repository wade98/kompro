'use client';

import { Grid } from "@mui/material";
import Nav from "../components/nav";

export default function Home() {
	return (
		<Grid container direction={{ xs: 'column', md: 'row' }} className="h-screen bg-whitewatch dark:bg-blackwatch bg-cover bg-center bg-local z-0" justifyContent="center">
			<Grid xs={12} justifyContent="center" alignContent='center' className="z-20">
				<Nav />
			</Grid>
			<div className="h-full w-full bg-black opacity-25 absolute z-10"></div>
		</Grid>
	);
}


import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/system";

const Button = styled(ButtonUnstyled)(`

transition: all 200ms ease;
cursor: pointer;
background: none;
outline: none;
border: none;
font-size: 1.5rem;

&:hover {
  font-weight: 500;
  font-variation-settings:
  'wght' 600,
}
`);

export default function Nav() {

	return (
		<Grid container className='hover:dark:bg-white group p-7'>
			<Grid xs display='flex'>
				<Button className="dark:text-white dark:group-hover:text-black justify-self-start">
					<span className="material-symbols-outlined">home</span>
				</Button>
			</Grid>
			<Grid xs={8} display='flex' justifyContent='center'>
				<Button className="dark:text-white dark:group-hover:text-black">
					<div className='content-center flex'>
						<div className="material-symbols-outlined pt-0.5">
							watch
						</div>
						fWatches
					</div>
				</Button>
			</Grid>
			<Grid xs display='flex' justifyContent='flex-end'>
				<Button className="dark:text-white dark:group-hover:text-black">
					<span className="material-symbols-outlined">
						shopping_cart
					</span>
				</Button>
			</Grid>
		</Grid >
	)
}

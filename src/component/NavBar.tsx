import { Link } from "react-router-dom";
import { Box, Text } from '@chakra-ui/react';
import { GhostButton } from '../ui';
import { useLocation } from "react-router-dom";

const NavBar = () => {
	const pathname = useLocation().pathname;

	return (
		<Box background="#7e77e2" >
			<Box p="4px 32px">
				<Text color="white" fontSize="3xl" fontWeight="bold" fontFamily="comic sans ms">
					BlueBerry
				</Text>
			</Box>
			<Box p="0 32px" background="white" shadow="md">
				<Link to="/">
					<GhostButton underlined={pathname == "/"}>
						レシート発行
					</GhostButton>
				</Link>
				<Link to="/everyones">
					<GhostButton underlined={pathname == "/everyones"}>
						みんなのレシート
					</GhostButton>
				</Link>
				<Link to="/trend">
					<GhostButton underlined={pathname == "/trend"}>
						トレンド
					</GhostButton>
				</Link>
			</Box>
		</Box>
	)
}

export default NavBar;

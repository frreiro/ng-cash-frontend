import styled from 'styled-components';

const TransferText = styled.div`
	width: 326px;
	margin-top: 41px;
	display: flex;
	justify-content: right;
	align-items: center;
	cursor: pointer;
	
	h1{
		font-family: ${props => props.theme.font.family.primary};
		font-size:  ${props => props.theme.font.sizes.mobile.medium};
		font-weight: 600;
		letter-spacing: ${props => props.theme.font.type.spaced_font}; ;
		color:  ${props => props.theme.colors.primary};	
	
	}
	.add {
		font-size:  ${props => props.theme.font.sizes.mobile.large};
		margin-left: 14px;
	}

`;



const Title = styled.h1`
	width: 100%;
	font-family: ${props => props.theme.font.family.primary};
	font-size: ${props => props.theme.font.sizes.mobile.x_large};
	color:  ${props => props.theme.colors.primary};
	letter-spacing:  ${props => props.theme.font.type.spaced_font};
	font-weight: 700;

`;

const WalletContainer = styled.main`
	width: 100%;
	height: 100%;
	padding: 55px 44px 0 44px;
	position: relative;
	
	.divider-balance{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}

	.logout{
		font-size: ${props => props.theme.font.sizes.mobile.large};
		color: ${props => props.theme.colors.third};
		position: absolute;
		top: 20px;
		right: 50px;
		cursor: pointer;

	}


	@media (min-width: 760px) {
		
		.divider-balance{
			flex-direction: row;
			align-items: flex-start;

			justify-content: center;

		}

		
	}

`;


export {
	WalletContainer,
	Title,
	TransferText
};
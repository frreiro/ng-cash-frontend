import styled from 'styled-components';

const BannerTransactionsHeader = styled.div`

	display:flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 29px;
	letter-spacing: ${props => props.theme.font.type.spaced_font}; ;
	color:  ${props => props.theme.colors.primary};	
	position: relative;

	.money{
		font-size: ${props => props.theme.font.sizes.mobile.x_large};
	}

	h1{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		font-family: ${props => props.theme.font.family.primary};
		font-size:  ${props => props.theme.font.sizes.mobile.medium};
		font-weight: 600;
	}

	button {
		font-family: ${props => props.theme.font.family.secondary};
		font-size:  ${props => props.theme.font.sizes.mobile.x_small};
		background-color:   ${props => props.theme.colors.primary};	
		color:  ${props => props.theme.colors.secondary};	
		border-radius: 	3px;
		padding: 5px 10px 5px 10px;
	}
`;

const BannerTransactions= styled.article`
	height: 400px;
	padding: 15px 20px 0px 27px;
	
	hr{
		height: 0.1px;
		background-color: ${props => props.theme.colors.primary};
	}
	
	.transactions{
		height: 300px;
		overflow-y: scroll;

		::-webkit-scrollbar {
			display: none;
		}
		
	}
	
`;

const BannerTransactionsContainer = styled.article`
	width: 326px;
	margin-top: 42px;
	
	@media (min-width: 760px) {
		margin-left: 30px;

		
	}
	`;



export {
	BannerTransactions,
	BannerTransactionsContainer,
	BannerTransactionsHeader,
	
};
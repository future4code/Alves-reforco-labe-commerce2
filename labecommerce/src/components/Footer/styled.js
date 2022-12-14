import styled from 'styled-components';

export const Box = styled.div`
    padding: 80px 60px;
    background: rgb(33,9,59);
    background: linear-gradient(90deg, rgba(33,9,59,1) 0%, rgba(130,60,241,0.8575805322128851) 99%);
    bottom: 0;
    width: 100%;
    height: 50%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	margin-top: 1em;
    bottom: 0;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
	    grid-template-columns: repeat(auto-fill,
		minmax(200px, 1fr));
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;

    &:hover {
	    color: yellow;
	    transition: 200ms ease-in;
    }
`;

    export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;
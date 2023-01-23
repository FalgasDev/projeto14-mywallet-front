import styled from 'styled-components';

export default function Registers({description, value, date, type}) {
	return (
		<RegisterContainer type={type}>
			<p><span>{date}</span> {description}</p>
      <p>{value.toFixed(2)}</p>
		</RegisterContainer>
	);
}

const RegisterContainer = styled.div`
	width: 100%;
	height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  word-break: break-all;
  line-break: auto;
  span {
    color: #C6C6C6;
    margin-right: 5px;
  }
  p:nth-child(1) {
    width: 70%;
  }
  p:nth-child(2) {
    color: ${props => props.type === 'exit' ? '#C70000' : '#03AC00'};
  }
`;

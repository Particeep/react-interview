import styled from "styled-components";

export const Toggle = ({ label, toggled, onClick }) => {
	return (
		<Label>
			<Input
				type="checkbox"
				checked={toggled}
				onClick={(e) => onClick(e.target.checked)}
			/>
			<Span />
			<Strong toggled={toggled}>{label}</Strong>
		</Label>
	);
};

const Label = styled.label`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 30px;
`;

const Input = styled.input`
	opacity: 0;
	width: 0;
	height: 0;
	&:checked {
		& + span {
			background-color: #1e8449;
			&:before {
				transform: translateX(29px);
			}
		}
	}
`;

const Span = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #85929e;
	transition: 0.3s;
	border-radius: 30px;
	&:before {
		position: absolute;
		content: "";
		height: 25px;
		width: 25px;
		left: 3px;
		bottom: 2.6px;
		background-color: #fff;
		border-radius: 50%;
		transition: 0.3s;
	}
`;

const Strong = styled.strong`
	position: absolute;
	left: 100%;
	width: max-content;
	line-height: 30px;
	margin-left: 10px;
	cursor: pointer;
	color: ${(props) => (props.toggled ? "#1E8449" : "#85929E")};
`;

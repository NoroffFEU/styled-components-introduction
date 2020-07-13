import styled from "styled-components";

// color: ${function (props) {
//     return props.theme.primaryColour;
// }};
const PageHeading = styled.h2`
    color: ${(props) => props.theme.primaryColour};
`;

export default PageHeading;

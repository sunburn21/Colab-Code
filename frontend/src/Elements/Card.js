import styled from 'styled-components';
import { elevation, transition } from "Utilities";

export const Card = styled.div`
    min-width: 320px;
    background: #ffffff;
    border-radius: 5px;
    color: black;
    padding: 15px;
    ${transition({ ease: "ease-in", property: "box-shadow" })} ${elevation[4]};
    &:hover {
    ${elevation[5]};
    }
`
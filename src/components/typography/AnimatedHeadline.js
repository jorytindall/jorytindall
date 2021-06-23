import styled from 'styled-components'
import { H1 } from "./Headings"

const AnimatedHeadline = styled(H1)`
    color: var(--color-primary-main);
    transition: all 0.15s ease;
    -webkit-text-stroke: 2px var(--color-primary-main);

    &:hover {
        color: transparent;
        transform: translateX(4px);
    }
`

export default AnimatedHeadline
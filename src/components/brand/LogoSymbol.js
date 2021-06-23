import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SVGWrapper = styled.svg``

const LogoSymbol = ({ color, maxWidth }) => {
    return (
        <SVGWrapper width={maxWidth} viewBox="0 0 88 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51 40L51 88L35 88L35 56L-6.99382e-07 56L0 40L51 40Z" fill={color} />
            <path d="M71.9998 16L72 88L88 88L87.9998 0L-7.62939e-06 -3.8466e-06L-8.32878e-06 16L71.9998 16Z" fill={color} />
            <path d="M16 88C16 103.464 28.536 116 44 116C59.464 116 72 103.464 72 88L88 88C88 112.301 68.3005 132 44 132C19.6995 132 -8.61091e-07 112.301 -1.9233e-06 88L16 88Z" fill={color} />
        </SVGWrapper>
    )
}

LogoSymbol.propsTypes = {
    color: PropTypes.string.isRequired,
    maxWidth: PropTypes.string,
}

LogoSymbol.defaultProps = {
    color: `var(--color-primary-main)`,
    maxWidth: `40px`,
}

export default LogoSymbol
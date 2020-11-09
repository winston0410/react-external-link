import React from 'react'

// rel="external" when you trust the link
const ExternalLink = React.forwardRef(
  function ExternalLink ({ children, ...attr }, ref) {
    return (
    <a ref={ref} target="_blank" rel="noopener noreferrer" itemProp="url" {...attr}>
      {children}
    </a>
    )
  })

export default ExternalLink

import React from 'react'

// rel="external" when you trust the link
function ExternalLink ({ children, ...attr }) {
  return (
    <a target="_blank" rel="noopener noreferrer" itemProp="url" {...attr}>
      {children}
    </a>
  )
}

export default ExternalLink

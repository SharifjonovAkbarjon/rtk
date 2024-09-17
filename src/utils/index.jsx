import React from 'react'
import PropTypes from 'prop-types';
import { Suspense as SuspenseComponent } from 'react'

const Suspense = ({ childen }) => {
  return (
    <SuspenseComponent fallback={<div className='text-center h-full flex items-center'>Loading...</div>}>
      {childen}
    </SuspenseComponent>
  )
}

{
  Suspense.propTypes = {
    childen: PropTypes.element
  }
}

export default Suspense
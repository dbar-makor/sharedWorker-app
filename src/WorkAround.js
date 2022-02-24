import React from 'react'
import PropTypes from 'prop-types'
import AppWorker from './AppWorker'

const WorkAround = props => {

  React.useEffect(() => {
    AppWorker.port.onmessage = (e) => {
      console.log(e)
    }
  }, [])

  return (
    <div>WorkAround</div>
  )
}

WorkAround.propTypes = {}

export default WorkAround
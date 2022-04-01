import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ErrorModal.scss';

const ErrorModal = ({ gqlError }) => {
  const [error, setError] = useState()

  useEffect(() => {
    setError(gqlError)
  }, [gqlError])

  const clearError = () => {
    setError()
  }

  return (
    <>
    {error &&
      <div className='error-modal'>
        <div className='modal-content'>
          <p className='error-message'>{error.message}</p>
            <Link to='/' className='error-button'
              onClick={clearError}
            >close
            </Link>
        </div>
      </div>
    }
    </>
  )
}

export default ErrorModal;

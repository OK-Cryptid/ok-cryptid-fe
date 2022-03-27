import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {ErrorContext} from '../Context/ErrorContext'
import '../Styles/ErrorModal.scss';

const ErrorModal = () => {
  const {error, setError} = useContext(ErrorContext)

  const clearError = () => {
    setError()
  }

  return (
    <>
    {error &&
      <div className='error-modal'>
        <div className='modal-content'>
          <p className='error-message'>{error}</p>
            <button className='error-button'
              onClick={clearError}
            >close
            </button>
        </div>
      </div>
    }
    </>
  )
}

export default ErrorModal;

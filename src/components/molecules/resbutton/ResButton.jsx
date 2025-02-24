import PropTypes from 'prop-types';
import './ResButton.css'
import pdf from '../../../../public/docs/Poyet-Nyahuku-CV.pdf'


const ResButton = ({children, ...props}) => {

  const handleClick = () => {
    window.open(pdf, '_blank');
  }
  
  return (
    <>
      <button
        className="resbutton"
        onClick={handleClick}
        {...props}
        >
          {children}
        </button>
    </>
  )
}

ResButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default ResButton;
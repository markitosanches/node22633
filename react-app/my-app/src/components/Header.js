import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
const Header = ({title, showAdd, onAdd}) => {
    const location = useLocation()
    return(
        <header className='header'>
            {/*<h1 style={headingStyle}>{title}</h1>*/}
            <h1>{title}</h1>
            {location.pathname === '/' && (
            <Button 
            text={showAdd ? 'Close' : 'Add'}  
            color={showAdd ? 'red' : 'green'}
            onClick={onAdd}/>
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

/*const headingStyle = {
    color: 'red', 
    backgroundColor: 'Black'
}*/
export default Header
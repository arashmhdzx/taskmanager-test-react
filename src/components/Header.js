import propType from 'prop-types'
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min'
import Button from './Button'

const Header = ({  title, onAdd , changeBtn }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
        color={changeBtn?"red":"green"}
        text={changeBtn?"close":"Add"}
        onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  title:"Task Tracker",
}

Header.propType ={
  title:propType.string.isRequired,
}


export default Header

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Switcher.scss';

const Switcher = ({ content, state }) => {
  const [isToggled, setIsToggled] = useState(state);

  const handleClick = () => {
    setIsToggled(value => !value)
  }

  return (
    <div className="switcher" onClick={handleClick}>
        <ul className={`switcher-tabs ${isToggled && 'switch'}`}>
          <li className={`switcher-tab`}>{content.on}</li>
          <li className="switcher-tab switcher-tab-off">{content.off}</li>
        </ul>
    </div>
  );
}

Switcher.defaultProps = {
  content: {
    on: "is",
    off: "is not"
  },
  state: false
}

Switcher.propTypes = {
  content: PropTypes.object,
  state: PropTypes.bool,
}

export default Switcher;

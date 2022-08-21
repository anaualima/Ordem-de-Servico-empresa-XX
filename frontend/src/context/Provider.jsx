import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';


function Provider({ children }) {

  const [state, setState] = useState([]);

  const value = useMemo(() => ({
    state,
    setState
  }), [state, setState]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
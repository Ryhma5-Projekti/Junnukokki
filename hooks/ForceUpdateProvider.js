import React, { createContext, useContext, useState } from 'react';

// Create a context
const ForceUpdateContext = createContext();

// Create a provider component
export const ForceUpdateProvider = ({ children }) => {
    const [forceUpdate, setForceUpdate] = useState(false);

    return (
        <ForceUpdateContext.Provider value={{ forceUpdate, setForceUpdate }}>
            {children}
        </ForceUpdateContext.Provider>
    );
};

// Custom hook to access the forceUpdate value
export const useForceUpdate = () => useContext(ForceUpdateContext);

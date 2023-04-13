import React, { useContext, useEffect, useState } from "react";

const Context = React.createContext(null);

export const useDispatch = () => {
    const store = useContext(Context);
    return store.dispatch;
}

export const useSelector = (callback) => {
    const store = useContext(Context);
    const [state, setState] = useState(
            callback(
                store.getState()
            )
        )

    useEffect(() => {
        store.subscribe(() => setState(
            callback(
                store.getState()
            )
        ))
    }, []);

    return state;
}


export const Provider = ({ children, store }) => {
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}
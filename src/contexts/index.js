import React from 'react'
import {useLocalStore} from "mobx-react-lite";
import { CounterStore, ThemeStore } from '../stores'

export const storesContext = React.createContext({
    counterStore: CounterStore,
    themeStore: ThemeStore,
});

export const StoreProvider = ({ children }) => {
    const store = useStores();
    return <storesContext.Provider value={store}>{children}</storesContext.Provider>
}

export const useStores = () => {
    const store = React.useContext(storesContext);
    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
}
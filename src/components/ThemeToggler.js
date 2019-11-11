import React from 'react'
import {observer, useLocalStore} from 'mobx-react-lite'
import { useStores } from '../contexts/index'

export const ThemeToggler = observer(() => {
    const { themeStore } = useStores();
    const store = useLocalStore(themeStore);

    return (
        <>
            <div>{store.theme}</div>
            <button onClick={() => store.setTheme('light')}>
                set theme: light
            </button>
            <button onClick={() => store.setTheme('dark')}>
                set theme: dark
            </button>
        </>
    )
});
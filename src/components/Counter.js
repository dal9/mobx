import React from 'react'
import {observer, useLocalStore} from 'mobx-react-lite'
import { useStores } from '../contexts/index'

export const Counter = observer(() => {
    const {counterStore} = useStores();
    const store = useLocalStore(counterStore);

    return (
        <>
            <div>{store.count}</div>
            <button onClick={store.increment}>++</button>
            <button onClick={store.decrement}>--</button>
        </>
    )
});
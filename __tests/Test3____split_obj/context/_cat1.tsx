import { createContext, useContext } from 'react'
import { useImmer } from 'use-immer'
import { MASTER } from './__master'

const init = MASTER.cat1

const initState = { ...init, init }

type ISet = (f: (draft: typeof initState) => void) => void

const Context = createContext<typeof init>(init)
const SetContext = createContext<ISet>(() => null)

export const Cat1Provider: React.FC = ({ children }) => {
    const [state, set] = useImmer(initState)

    const { init, ...value } = state

    return (
        <Context.Provider value={value}>
            <SetContext.Provider value={set}>
                {children}
            </SetContext.Provider>
        </Context.Provider>
    )
}

export const useCat1 = () => useContext(Context)
export const setCat1 = () => useContext(SetContext)
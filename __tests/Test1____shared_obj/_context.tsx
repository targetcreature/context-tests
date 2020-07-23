import { createContext, useContext } from "react"
import { useImmer } from "use-immer"

export const init = {
    cat1: {
        id: 1,
        name: "Boots",
    },
    cat2: {
        id: 2,
        name: "Felix",
    },
    cat3: {
        id: 3,
        name: "Spot",
    }
}

const initState = { ...init, init }

export type Props = typeof init
type ISet = (f: (draft: typeof initState) => void) => void

const Context = createContext(init)
const SetContext = createContext<ISet>(() => null)

export const Provider: React.FC = ({ children }) => {

    const [{ init, ...state }, set] = useImmer(initState)

    return (
        <Context.Provider value={state}>
            <SetContext.Provider value={set}>
                {children}
            </SetContext.Provider>
        </Context.Provider>
    )
}

export const useTest = () => useContext(Context)
export const useSet = () => useContext(SetContext)
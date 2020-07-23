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

const Context1 = createContext(init.cat1)
const Context2 = createContext(init.cat2)
const Context3 = createContext(init.cat3)

const SetContext = createContext<ISet>(() => null)

export const Provider: React.FC = ({ children }) => {

    const [{ init, ...state }, set] = useImmer(initState)

    return (
        <Context1.Provider value={state.cat1}>
            <Context2.Provider value={state.cat2}>
                <Context3.Provider value={state.cat3}>
                    <SetContext.Provider value={set}>
                        {children}
                    </SetContext.Provider>
                </Context3.Provider>
            </Context2.Provider>
        </Context1.Provider>
    )
}

export const useCat1 = () => useContext(Context1)
export const useCat2 = () => useContext(Context2)
export const useCat3 = () => useContext(Context3)
export const useSet = () => useContext(SetContext)
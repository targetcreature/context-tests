import { Cat1Provider, setCat1 } from "./_cat1"
import { Cat2Provider, setCat2 } from "./_cat2"
import { Cat3Provider, setCat3 } from "./_cat3"

export const Provider: React.FC = ({ children }) => {

    return (
        <Cat1Provider>
            <Cat2Provider>
                <Cat3Provider>
                    {children}
                </Cat3Provider>
            </Cat2Provider>
        </Cat1Provider>
    )

}

export const useSet = () => ({
    cat1: setCat1(),
    cat2: setCat2(),
    cat3: setCat3()
})
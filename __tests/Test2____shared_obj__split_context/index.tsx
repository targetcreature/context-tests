import { Cat } from "./Cat"
import { Provider, useCat1, useCat2, useCat3 } from "./_context"

const Test: React.FC = () => {

    const cat1 = useCat1()
    const cat2 = useCat2()
    const cat3 = useCat3()

    return (
        <div>
            <Cat {...cat1} />
            <Cat {...cat2} />
            <Cat {...cat3} />
        </div>
    )

}

export const Test2: React.FC = () =>
    <Provider>
        <Test />
    </Provider>
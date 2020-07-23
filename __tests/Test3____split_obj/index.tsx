import { Cat1 } from "./Cat1"
import { Cat2 } from "./Cat2"
import { Cat3 } from "./Cat3"
import { Provider } from "./context"
import { useCat1 } from "./context/_cat1"

const Test: React.FC = () => {

    /* Will re-render all children when cat1 changes */
    const cat1 = useCat1()

    /* Otherwise, eact child renders autonomously */

    return (
        <div>
            <Cat1 />
            <Cat2 />
            <Cat3 />
        </div>
    )

}

export const Test3: React.FC = () =>
    <Provider>
        <Test />
    </Provider>
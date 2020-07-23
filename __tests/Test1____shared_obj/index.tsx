import { Cat } from "./Cat"
import { Provider, useTest } from "./_context"

const Test: React.FC = () => {

    const {
        cat1,
        cat2,
        cat3
    } = useTest()

    return (
        <div>
            <Cat {...cat1} />
            <Cat {...cat2} />
            <Cat {...cat3} />
        </div>
    )

}

export const Test1: React.FC = () =>
    <Provider>
        <Test />
    </Provider>

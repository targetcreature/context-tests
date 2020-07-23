import { Cat1Provider } from "./_cat1"
import { Cat2Provider } from "./_cat2"
import { Cat3Provider } from "./_cat3"

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
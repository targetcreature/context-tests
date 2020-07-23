import { useSet } from "./context"
import { useCat2 } from "./context/_cat2"

export const Cat2: React.FC = () => {

    const { id, name } = useCat2()

    console.log(id)

    const set = useSet()

    return (
        <div
            style={{
                display: "inline-block",
                padding: "20px",
                border: "1px solid black",
                margin: "20px",
                textAlign: "center"
            }}
        >
            <div>{name}</div>
            <button
                style={{
                    marginTop: "20px",
                    padding: "10px",
                }}

                onClick={() => {
                    set.cat2((draft) => {
                        draft.name = "clicked"
                    })
                }}
            >
                CLICK {id}
            </button>
        </div>
    )

}
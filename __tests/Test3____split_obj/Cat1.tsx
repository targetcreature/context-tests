import { useSet } from "./context"
import { useCat1 } from "./context/_cat1"

export const Cat1: React.FC = () => {

    const { id, name } = useCat1()

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
                    set.cat1((draft) => {
                        draft.name = "clicked"
                    })
                }}
            >
                CLICK {id}
            </button>
        </div>
    )

}
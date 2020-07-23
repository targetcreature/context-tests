import { setCat1, useCat1 } from "./context/_cat1"

export const Cat1: React.FC = () => {

    const { id, name } = useCat1()

    console.log(id)

    const set = setCat1()

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
                    set((draft) => {
                        draft.name = "Pook"
                    })
                }}
            >
                CLICK {id}
            </button>
        </div>
    )

}
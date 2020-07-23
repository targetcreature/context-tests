import { setCat3, useCat3 } from "./context/_cat3"

export const Cat3: React.FC = () => {

    const { id, name } = useCat3()

    console.log(id)

    const set = setCat3()

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
                        draft.name = "clicked"
                    })
                }}
            >
                CLICK {id}
            </button>
        </div>
    )

}
import { setCat2, useCat2 } from "./context/_cat2"

export const Cat2: React.FC = () => {

    const { id, name } = useCat2()

    console.log(id)

    const set = setCat2()

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
                    const { name: name2 } = set((draft) => {
                        draft.name = "clicked"
                    })
                    console.log({ name2 })
                }}
            >
                CLICK {id}
            </button>
        </div>
    )

}
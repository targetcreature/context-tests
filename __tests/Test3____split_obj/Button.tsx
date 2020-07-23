import { useSet } from "./context"

type Props = {
    id: number
}

export const Button: React.FC<Props> = ({ id }) => {

    const set = useSet()

    return (
        <button
            style={{
                marginTop: "20px",
                padding: "10px",
            }}

            onClick={() => {
                set[`cat${id}`]((draft) => {
                    draft.name = "clicked"
                })
            }}
        >
            CLICK {id}
        </button>
    )

}

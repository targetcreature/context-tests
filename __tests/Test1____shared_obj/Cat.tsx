import { Button } from "./Button"

type Props = {
    id: number
    name: string
}

export const Cat: React.FC<Props> = ({ id, name }) => {

    console.log(id)

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
            <Button id={id} />
        </div>
    )

}

export type Menu = {
    id: number,
    name: string,
    link: string,
    child?: Menu[]
}


export type BooleanSetter = React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;


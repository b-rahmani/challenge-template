
export type Menu = {
    id: number,
    name: string,
    link: string,
    child?: Menu[]
}


export type shortUrl = {
    main: string,
    shorted: string
}

export type copyUrl = 'copy' | 'copied!'

export type BooleanSetter = React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;


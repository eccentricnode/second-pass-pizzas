export interface Pizza {
    id: number,
    name: string,
    calories: number,
    mainTopping: string,
    secondTopping: string
}

export const emptyPizza: Pizza = {
    id: null,
    name: '',
    calories: null,
    mainTopping: '',
    secondTopping: '',
}

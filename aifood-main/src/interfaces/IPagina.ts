// essa repaginação é uma repaginação de uma outra interface 
export interface IPaginacao<T>{
    count: number, 
    next: string, 
    previous: string, 
    // é um array , precisamos escrever o tipo do array 
    results: T[]
}
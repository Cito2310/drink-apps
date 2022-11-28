import { IProduct } from './IProduct';

export interface IStateRespProduct {
    status: boolean,
    data: IProduct[],
}
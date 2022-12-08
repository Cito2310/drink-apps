import { IReqHttp } from '../../interfaces/IReqHttp';
import { checkSizeUnit } from './checkSizeUnit';

interface IProductInput {
    brand: string,
    category: string,
    flavor: string,
    size: string,
    location: number,
}


export const checkInputsProduct = ( product: IProductInput, setReqHttp: React.Dispatch<React.SetStateAction<IReqHttp>> ): boolean => {
    const { brand, category, flavor, location, size } = product;

    // BRAND CHECK
        // brand not is empty
        if ( brand.trim().length === 0 ) {
            setReqHttp({ status: "error", msg: "La marca es requerida" })
            return false
        }
        // brand has more than two characters
        if ( brand.trim().length < 2 ) {
            setReqHttp({ status: "error", msg: "La marca debe tener mas de 1 caracter" })
            return false
        }
        // brand has less than 20 characters
        if ( brand.trim().length > 20 ) {
            setReqHttp({ status: "error", msg: "La marca debe tener menos de 20 caracteres" })
            return false
        }

    // CATEGORY CHECK
        // category not is empty
        if ( category.trim().length === 0 ) {
            setReqHttp({ status: "error", msg: "La categoria es requerida" })
            return false
        }
        // category has more than two characters
        if ( category.trim().length < 2 ) {
            setReqHttp({ status: "error", msg: "La categoria debe tener mas de 1 caracter" })
            return false
        }
        // category has less than 20 characters
        if ( category.trim().length > 20 ) {
            setReqHttp({ status: "error", msg: "La categoria debe tener menos de 20 caracteres" })
            return false
        }

    // FLAVOR CHECK
        // flavor not is empty
        if ( flavor.trim().length === 0 ) {
            setReqHttp({ status: "error", msg: "El sabor es requerida" })
            return false
        }
        // flavor has more than two characters
        if ( flavor.trim().length < 2 ) {
            setReqHttp({ status: "error", msg: "El sabor debe tener mas de 1 caracter" })
            return false
        }
        // flavor has less than 20 characters
        if ( flavor.trim().length > 20 ) {
            setReqHttp({ status: "error", msg: "El sabor debe tener menos de 20 caracteres" })
            return false
        }

    // SIZE CHECK
        // size not is empty
        if ( size.trim().length === 0 ) {
            setReqHttp({ status: "error", msg: "El tamaño es requerida" })
            return false
        }
        // size has more than two characters
        if ( size.trim().length < 2 ) {
            setReqHttp({ status: "error", msg: "El tamaño debe tener mas de 1 caracter" })
            return false
        }
        // size has less than 20 characters
        if ( size.trim().length > 20 ) {
            setReqHttp({ status: "error", msg: "El tamaño debe tener menos de 20 caracteres" })
            return false
        }
        // size check unit l - ml - cc - oz
        if ( !checkSizeUnit( size ) ) {
            setReqHttp({ status: "error", msg: "La unidad del tamaño no es valida - Solo se permite 'L' 'ML' 'CC' 'OZ' " })
            return false
        }

    // LOCATION CHECK
        // location has more than two characters
        if ( !location ) {
            setReqHttp({ status: "error", msg: "La ubicacion es requerido" })
            return false
        }
        // location is integer number
        if ( location%1 !== 0 ) {
            setReqHttp({ status: "error", msg: "La ubicacion debe ser un numero entero" })
            return false
        }
        // location has less than 30
        if ( location > 30 ) {
            setReqHttp({ status: "error", msg: "La ubicacion debe ser menor o igual a 30" })
            return false
        }
        // location has less than 20 characters
        if ( location < 0 ) {
            setReqHttp({ status: "error", msg: "La ubicacion debe ser menor 0 igual a 30" })
            return false
        }

        
    // ALL OK
    return true;
}
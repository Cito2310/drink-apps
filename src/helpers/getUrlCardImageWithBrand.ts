export const getUrlCardImageWithBrand = ( brand: string ): string => {
    const replaceToUnderscore = brand.replace(/\s/g, "_");
    const stringToLowerCase = replaceToUnderscore.toLowerCase();

    const url = `cards-48x300/card-48x300-${ stringToLowerCase }.png`;
    return url;
}
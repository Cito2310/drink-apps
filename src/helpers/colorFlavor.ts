export const colorFlavor = ( flavor: string ) => {
    switch (flavor) {
        case "naranja": return "#fd7f1b"
        case "manzana": return "#8e6e31"
        case "lima": return "#448617"
        case "pomelo": return "#e7cf4d"
        case "cola": return "#291002"
    
        default: return "#000"
    }
}
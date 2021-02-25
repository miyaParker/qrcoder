export const getUrl=(text)=>{
    return{
        type: 'getUrl',
        payload:text
    }
}
export const downloadQR=()=>{
    return{
        type:"downloadQR"
    }
}
export const setForm=(type)=>{
    return{
        type:'form',
        payload:type
    }
}
import {downloadQR} from '../utility'
const urlReducer = (state = "hello", action) => {
    let url = `http://api.qrserver.com/v1/create-qr-code/?data=${state}!&size=150x150&bgcolor=0-40-138&color=255-255-255`
    switch (action.type) {
        case 'getUrl':
            state = action.payload
            url = `http://api.qrserver.com/v1/create-qr-code/?data=${state}!&size=150x150&bgcolor=0-40-138&color=255-255-255`
            return url
        case 'downloadQR':
            downloadQR(url)
            return null;
        default:
            return url
    }
}
export default urlReducer
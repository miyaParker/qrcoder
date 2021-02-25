import './CodePallete.css'
import download from '../../assets/download.png'
import {useSelector, useDispatch} from 'react-redux'
import { downloadQR } from '../../actions'

const CodePalette=()=>{
    const imageSource = useSelector(state=> state.imageSource)
    const dispatch = useDispatch()
    return(
        <div className="pallete">
            <div>
                <img src={imageSource} className="qr" width={150}height={150} alt="qrcode"/>
            </div>
            <div className="buttons">
                <a href={imageSource} download="qrcode"><button onClick={()=>{dispatch(downloadQR())}} className="button light-blue" ><img src={download} alt="download"/>SVG</button></a>
                <a href={imageSource} download="qrcode"><button onClick={()=>{dispatch(downloadQR())}} className="button yellow"><img src={download} alt="download"/>JPG</button></a>
            </div>
        </div>
    )
}
export default CodePalette
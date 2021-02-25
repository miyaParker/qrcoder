import {useDispatch} from 'react-redux'
import {getUrl} from '../../actions'

const Text = ()=>{
    const dispatch = useDispatch()
    return(
        <form className="form">
                <label>Enter your text</label>
                <textarea placeholder = "Your QR code will be generated automatically" onChange={(e)=>dispatch(getUrl(e.target.value))}></textarea>
            </form>
    )
}

export default Text
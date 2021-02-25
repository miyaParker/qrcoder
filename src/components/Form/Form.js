import Text from './Text'
const Form = ({ type }) => {
    console.log(type)
    switch (type) {
        case 'text':
            return <Text />
        default:
            return
    }
}
export default Form
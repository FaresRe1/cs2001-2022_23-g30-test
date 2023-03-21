import foodlist from './OldIndex'
import TIN from './TIN.jpg'
import FRESH from './FRESH.jpg'
import FROZEN from './FROZEN.jpg'
import COOKED from './COOKED.jpg'
const Images = (props) => {

    if (foodlist[props.i].type=='TIN') {
        return(
            <div class="grid-item"><img src={TIN} className="Thumbnail"  /></div>
        )
    }
    if (foodlist[props.i].type=='FRESH') {
        return(
            <div class="grid-item"><img src={FRESH} className="Thumbnail"  /></div>
        )
    }
    if (foodlist[props.i].type=='FROZEN') {
        return(
            <div class="grid-item"><img src={FROZEN} className="Thumbnail"  /></div>
        )
    }
    if (foodlist[props.i].type=='COOKED') {
        return(
            <div class="grid-item"><img src={COOKED} className="Thumbnail"  /></div>
        )
    }
}

export default Images
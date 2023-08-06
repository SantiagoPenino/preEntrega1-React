import { Icon } from '@iconify/react';
import './cartwidget.css'

const CART_ITEMS = 3;
const CART_WIDGET = () => {
    return(
        <>
        <Icon className='cart-icon' icon="raphael:cart" />
        {CART_ITEMS}
        </>
    )
}

export default CART_WIDGET
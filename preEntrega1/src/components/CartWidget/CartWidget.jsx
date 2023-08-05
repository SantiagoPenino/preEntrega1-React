import { Icon } from '@iconify/react';

const CART_ITEMS = 1;
const CART_WIDGET = () => {
    return(
        <>
        <Icon className='cart__icon' icon="raphael:cart" />
        {CART_ITEMS}
        </>
    )
}

export default CART_WIDGET
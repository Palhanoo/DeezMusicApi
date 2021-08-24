import React from 'react';
import { 
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody
} from './styled';

export default () => {
    return (
        <CartArea>
            <CartHeader>
                <CartIcon src="/assets/favorites.png"/>
                <CartText>Meus Favoritos</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    )
}
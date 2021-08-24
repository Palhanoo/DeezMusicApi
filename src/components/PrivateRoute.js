import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

//usando uma rota privada, pegando toda a children (o que vai tar dentro dele) e enviando o resto das props como parametro tbm
export default ({children, ...rest}) => {
    const history = useHistory();
    const token = useSelector(state => state.user.token);

    //deixando as rotas privadas só funcionando se tiver com o token OK.
    if(!token || token === '') {
        history.push('/login');
        //parando a exibição
        return null;
    }
    return <Route {...rest}>{children}</Route>
}
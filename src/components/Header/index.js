import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {
    //fazendo a const de abrir e fechar o search do header
    const [ inputActive, setInputActive] = useState(search === '' ? false : true);

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        if(search === ''){
            setInputActive(false);
        }
    }
    //setei o valor do input como search, e aqui apenas altero o valor do onsearch, pegando o próprio valor do input, no caso mandei a função handleChange, setando o onSearch = o valor. OnSearch= setheadersearch
    const handleChange = (e) => {
        onSearch(e.target.value);

    }

    return(
        <Container>
            <Logo src="/assets/logo2.png" />
            <SearchInput 
                type="text" 
                placeholder="Digite um produto..."
                onChange={handleChange}
                value={search}
                active={inputActive }
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
             />
        </Container>
    );
}
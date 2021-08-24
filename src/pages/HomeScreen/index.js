import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
    Container,
    MusicsArea,
    MusicList,
    MusicPlayerArea,
    MusicTitle
} from './styled';

import Header from '../../components/Header';


import api from '../../api';

export default () => {
    const history = useHistory();
    //passo o headersearc e setheadersearch como parametro la pro header
    const [headerSearch, setHeaderSearch] = useState('');
    const [music, setMusic] = useState([]);

    useEffect(() => {
        const getMusics = async() => {
            let res = await api.getMusics();
            console.log(res);
            if(res){
                setMusic(res);
            }
        }
        getMusics();
    }, [])

    const listamusicas = music.map(
        (a, i)=>
            <MusicsArea  key={i}>
                <MusicList>
                    <MusicTitle>{a.title}</MusicTitle>
                <MusicPlayerArea controls>
                    <source src={a.preview} type="audio/mp3"></source>
                </MusicPlayerArea>
                </MusicList>
            </MusicsArea>
    )

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {music &&
            <>
                {listamusicas}
            </>
            }
        </Container>
    );
}
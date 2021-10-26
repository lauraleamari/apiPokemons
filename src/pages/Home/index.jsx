import React, { useEffect, useState } from 'react';
import Search from '../../components/Search'
import * as S from './styled'

import api from '../../service/api';
import logo from '../../assets/logo.png'


const Result = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        api.get('/pokemon').then(response =>{
            const pokeNames = response.data.results.map(item => item.name);
            Promise.all(
                pokeNames.map(name => api.get(`/pokemon/${name}`))
            ).then((responseList) => {
                const pokeList = responseList.map(item => item.data);
                setPokemons(pokeList);
            });
        });
    }, []);


    return (
        <S.Container>
                <S.Header>
                    <img src={logo} alt="Pokemon"/>
                    <Search />
                </S.Header>
        </S.Container>
    )
}

export default Result;
import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import Search from '../../components/Search'
import * as S from './styled'

import api from '../../service/api';
import logo from '../../assets/logo.png'


const Result = (props) => {
    const {
      handleSearch
    } = props;
    const history = useHistory();
    const [pokemons, setPokemons] = useState([]);
    const [pokeSelect, setPokeSelect] = useState([]);

    useEffect(() => {
        api.get(`/pokemon/${handleSearch}`).then(response =>{
            const pokeNames = response.data.results.map(item => item.name);
            Promise.all(
                pokeNames.map(handleSearch => api.get(`/pokemon/${handleSearch}`))
            ).then((responseList) => {
                const pokeList = responseList.map(item => item.data);
                setPokemons(pokeList);
            });
        });
    }, []);


    function handleClick(item){
        setPokeSelect([ ...pokeSelect, item]);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        history.push('/');
    }

    return (
        <S.Container>
                <S.Header>
                        <img src={logo} alt="Pokemon"/>
                    <Search />
                </S.Header>

                <fieldset>
                    <div className="field-group">
                        <div className="field cards">
                            <ul className="pokemons">
                            {pokemons.map(item => (
                                <li
                                    key={item.name}
                                    className={item.name}
                                >
                                    <div className='name'>{item.name}</div>
                                    <span className="poke-image">
                                        <img src={item.sprites.front_shiny} alt={item.name} />
                                    </span>
                                    <div className='abilities'>Habilidade: {item.abilities[0].ability.name}</div>
                                    <div className='base_experience'>Experiencia: {item.base_experience}</div>
                                    <div className='game_index'>Índices de jogos: {item.game_indices[0].game_index}</div>
                                    <div className='movie'>Movimentos: {item.moves[0].move.name}</div>
                                    <div className='height'>Alura: {item.height*10} cm</div>
                                    <div className='weight'>Peso: {item.weight/10} kg</div>

                                    <div className='stats'>Estatísticas:
                                        <ul>
                                            {item.stats.map((statObj) => (
                                                <li
                                                    key={statObj.stat.name}
                                                    className={statObj.base_stats}
                                                >
                                                    {statObj.stat.name}: {statObj.base_stat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </fieldset>
        </S.Container>
    )
}

export default Result;
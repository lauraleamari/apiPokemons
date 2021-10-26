import React, {useState} from 'react'
import { useHistory} from 'react-router-dom';
import * as S from "./styled"

const Search = () => {
    const [search, setSearch] = useState('');
    const history = useHistory();

    function handleSearch() {
        setSearch(search)
        history.push('/result');
    }

    return(
        <S.Container>
            <input
                className="search"
                value={search}
                placeholder="Buscar"
                onChange={e => setSearch(e.target.value)}
            />
            <button
                type="button"
                onClick={handleSearch}
            >
                Buscar
            </button>
        </S.Container>
    )
}

export default Search;
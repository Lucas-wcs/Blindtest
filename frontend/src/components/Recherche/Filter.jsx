import React from 'react';

function Filter(props) {
    return (
        <div>
         <h1>Re<span>c</span>herchez <span>d</span>es tit<span>r</span>es</h1>
            <button className='filter'>Ouvrir les filtres</button>
            <div className='buttons'>
                <fieldset className='choice'>
                    <legend>Genre</legend>

                    <div>
                        <input type="checkbox" id="check" name="drone" value="Rock"
                        />
                        <label for="huey"> Rock</label>
                    </div>

                    <div>
                        <input type="checkbox" id="check" name="drone" value="Pop" />
                        <label for="dewey"> Pop</label>
                    </div>

                    <div>
                        <input type="checkbox" id="check" name="drone" value="Film" />
                        <label for="louie"> Film</label>
                    </div>
                    <div>
                        <input type="checkbox" id="check" name="drone" value="Rap FR" />
                        <label for="louie"> Rap FR</label>
                    </div>
                    <div>
                        <input type="checkbox" id="check" name="drone" value="Rap US" />
                        <label for="louie"> Rap US</label>
                    </div>
                    <div>
                        <input type="checkbox" id="check" name="drone" value="Electro" />
                        <label for="louie"> Electro</label>
                    </div>
                </fieldset>

                <fieldset className='choice'>
                    <legend>Epoque</legend>

                    <div>
                        <input type="checkbox" id="check" name="drone" value="actuel"
                        />
                        <label for="huey"> Actuel</label>
                    </div>

                    <div>
                        <input type="checkbox" id="check" name="drone" value="annee_2000-2010" />
                        <label for="dewey"> Annee 2000-2010</label>
                    </div>

                    <div>
                        <input type="checkbox" id="check" name="drone" value="annee_1990-2000" />
                        <label for="louie"> Annee 1990-2000</label>
                    </div>
                    <div>
                        <input type="checkbox" id="check" name="drone" value="annee_1960-2000" />
                        <label for="louie"> Annee 1960-2000</label>
                    </div>
                </fieldset>
                <input type="text" className="searchbox" name="name" required
                    size="20" placeholder="Recherche par titre" />
                <button className='go'>GO !</button>
            </div>
        </div>
        );
    }

    
export default Filter;
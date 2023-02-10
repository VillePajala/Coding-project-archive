import React from 'react';
import '../index.css'

interface Props {
            tunnus? : string,
            paivita? : (event :any) => void,
            login? : (event : any) => void,
            logout? : (event: any) => void,
            loginStatus? : boolean
          }


const Kirjautuminen : React.FC<Props> = (props : Props) => {

    let loggedOut = <form>
                        <label>
                            Kirjaudu:
                            <input className="form-control" type="text" onChange={props.paivita} name="tunnus" placeholder="Käyttäjätunnus.." />
                        </label>
                        <label>
                            <input className="form-control" type="text" onChange={props.paivita} name="salasana" placeholder="Salasana.."/>
                        </label>
                        <button className="btn btn-primary" onClick={props.login}>Kirjaudu</button>
                    </form>

    let loggedIn = <form>
                        <label>
                            <p id="caption">Olet kirjautunut sisään tunnuksella: {props.tunnus}</p>
                        </label>
                        <button className="btn btn-primary" onClick={props.logout}>Kirjaudu ulos</button>
                    </form>

    return (
        <div id="kirjautuminen" className="container">
            {props.loginStatus === true ? loggedIn : loggedOut}
        </div>
    )
}

export default Kirjautuminen;


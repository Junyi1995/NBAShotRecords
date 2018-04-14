import React from 'react';
import logo from '../assets/images/nba-logoman.svg';
import nba from '../assets/images/nba-logoman.svg';


export class TopNavBar extends React.Component{
    render() {
        return (
            <header className="App-header">
            <img  src={logo} className="App-logo" alt="logo"/>
        </header>

        );
    }
}
export const TEAM_PIC_URL_PREFIX =
    'https://stats.nba.com/media/img/teams/logos';
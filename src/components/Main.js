import React from 'react';
import nba from 'nba';
import {ShotChart} from './ShotChart';


export class Main extends React.Component{
    state = {
        playerId:nba.findPlayer('Stephen Curry').playerId,
        playerInfo:{}
    }
    componentDidMount() {
        nba.stats.playerInfo({PlayerId:this.state.playerId}).then((info) => {
           const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
           this.setState({playerInfo});
        });
    }
    render() {
        return (
            <div>
             <ShotChart playerId = {this.state.playerId}/>
            </div>
        );
    }
}
import React from 'react';
import nba from 'nba';
import {Profile} from './Profile';
import {DataViewContainer} from "./DataViewContainer"

export class Main extends React.Component{
    state = {
        playerInfo:{}
    }
    componentDidMount() {
        nba.stats.playerInfo({PlayerID:nba.findPlayer('Stephen Curry').playerId}).then((info) => {
           const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
           console.log(playerInfo);
           this.setState({playerInfo});
        });
    }
    render() {
        return (
            <div className = "main">
            <Profile playerId = {this.state.playerInfo.playerId}
                playerInfo = {this.state.playerInfo}/>
                <DataViewContainer playerId = {this.state.playerInfo.playerId}/>
            </div>
        );
    }
}
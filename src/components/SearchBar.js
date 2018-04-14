import { AutoComplete, Input, Icon } from 'antd';
import React from 'react';
import nba from "nba";
import {PROFILE_PIC_URL_PREFIX} from "../constants"

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        console.log(value);
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(({fullName, playerId}) => {
                return (
                <Option key = {playerId}>
                    <img src = {`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}/>
                    <span>{fullName}</span>
                </Option>
            );
            }),
        });
    }
    onSelect = (playerName)=> {
        this.props.loadPlayerInfo(playerName);
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete className = "search-bar"
                dataSource={dataSource}
                size = "large"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="search NBA Player"
            >
            <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
  );
    }
}


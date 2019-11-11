import React, { Component } from 'react';
import {dataDragonService} from '../service/DataDragonService';

export default class PlayerTable extends React.Component {
  render() {
    return (
      <table class="table table-striped table-light">
        <thead class="thead-light">
          <tr>
           <th scope="col">Champion</th>
           <th scope="col">Level</th>
           <th scope="col">K/D/A</th>
           <th scope="col">Damage Dealt</th>
           <th scope="col">Vision Score</th>
         </tr>
        </thead>
        <tbody>
         {this.props.players.map((player) => {
           return (
             <tr>
               <td>
                 <img src={dataDragonService.getChampionIcon(player.championId)} width="30" height="30" />
               </td>
               <td>
                {player.stats.champLevel}
               </td>
               <td>
                 {player.stats.kills}/{player.stats.deaths}/{player.stats.assists}
               </td>
               <td>
                {player.stats.totalDamageDealtToChampions}
               </td>
               <td>
                {player.stats.visionScore}
              </td>
             </tr>
           )
         })}
        </tbody>
      </table>
    )
  }
}

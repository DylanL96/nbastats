import React from 'react';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const PlayerStats = ({playerStats}) => {
  // console.log(playerStats)
  const GpToolTip = props => (
    <Tooltip {...props}>Games Played</Tooltip>
  );
  const PtsToolTip = props => (
    <Tooltip {...props}>Points</Tooltip>
  );
  const AstToolTip = props => (
    <Tooltip {...props}>Assists</Tooltip>
  );
  const BlkToolTip = props => (
    <Tooltip {...props}>Blocks</Tooltip>
  );
  const ToToolTip = props => (
    <Tooltip {...props}>Turnovers</Tooltip>
  );
  const StlToolTip = props => (
    <Tooltip {...props}>Steals</Tooltip>
  );
  const OrebToolTip = props => (
    <Tooltip {...props}>Offensive Rebounds</Tooltip>
  );
  const DrebToolTip = props => (
    <Tooltip {...props}>Defensive Rebounds</Tooltip>
  );
  const fg3pctToolTip = props => (
    <Tooltip {...props}>3-Point Field Goals Percentage</Tooltip>
  );
  const fg3aToolTip = props => (
    <Tooltip {...props}>3-Point Field Goals Attempted</Tooltip>
  );
  const fg3mToolTip = props => (
    <Tooltip {...props}>3-Point Field Goals Made</Tooltip>
  );
  const fgpctToolTip = props => (
    <Tooltip {...props}>Field Goals Percentage</Tooltip>
  );
  const fgaToolTip = props => (
    <Tooltip {...props}>Field Goals Attempted</Tooltip>
  );
  const fgmToolTip = props => (
    <Tooltip {...props}>Field Goals Made</Tooltip>
  );
  const ftpctToolTip = props => (
    <Tooltip {...props}>Free Throw Percentage</Tooltip>
  );
  const ftaToolTip = props => (
    <Tooltip {...props}>Free Throw Attempted</Tooltip>
  );
  const ftmToolTip = props => (
    <Tooltip {...props}>Free Throw Made</Tooltip>
  );
  return (
    <React.Fragment>
    <div>
      <h3>
      2019-2020 Statistics
      </h3>
      </div>
      
    <Table striped bordered hover>
      <thead>
        <tr>
          <OverlayTrigger placement="top" overlay={GpToolTip}>
            <th>GP</th>
          </OverlayTrigger>
          <th>Average Mins</th>
          <OverlayTrigger placement="top" overlay={PtsToolTip}>
            <th>Pts</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={AstToolTip}>
            <th>Ast</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={BlkToolTip}>
            <th>Blk</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={ToToolTip}>
            <th>TO</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={StlToolTip}>
            <th>Stl</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={OrebToolTip}>
            <th>OReb</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={DrebToolTip}>
            <th>DReb</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={fg3pctToolTip}>
            <th>Fg3_Pct</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={fg3aToolTip}>
            <th>Fg3A</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={fg3mToolTip}>
            <th>Fg3M</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={fgpctToolTip}>
            <th>Fg_Pct</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={fgaToolTip}>
            <th>Fga</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={fgmToolTip}>
            <th>Fgm</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={ftpctToolTip}>
            <th>Ft_Pct</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={ftaToolTip}>
            <th>Fta</th>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={ftmToolTip}>
            <th>Ftm</th>
          </OverlayTrigger>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {playerStats.games_played}
          </td>
          <td>
            {playerStats.min}
          </td>
          <td>
            {playerStats.pts}
          </td>
          <td>
            {playerStats.ast}
          </td>
          <td>
            {playerStats.blk}
          </td>
          <td>
            {playerStats.turnover}
          </td>          
          <td>
            {playerStats.stl}
          </td>
          <td>
            {playerStats.oreb}
          </td>
          <td>
            {playerStats.dreb}
          </td>
          <td>
            {playerStats.fg3_pct}
          </td>
          <td>
            {playerStats.fg3a}
          </td>
          <td>
            {playerStats.fg3m}
          </td>
          <td>
            {playerStats.fg_pct}
          </td>
          <td>
            {playerStats.fga}
          </td>
          <td>
            {playerStats.fgm}
          </td>
          <td>
            {playerStats.ft_pct}
          </td>
          <td>
            {playerStats.fta}
          </td>
          <td>
            {playerStats.ftm}
          </td>
        </tr>
      </tbody>
    </Table>
    </React.Fragment>
  )
};

export default PlayerStats;
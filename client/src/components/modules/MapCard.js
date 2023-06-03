import React, { Component } from "react";
import { prettifyTourney } from "../../utilities";
import {
  DeleteOutlined,
  StarOutlined,
  ClockCircleOutlined,
  DashboardOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import CustomMapBadge from "../../public/custom-map-badge.svg";
import CustomSongBadge from "../../public/custom-song-badge.svg";

import { Card, Popconfirm, Tooltip } from "antd";
import "./MapCard.css";
import DefaultBG from "../../public/default-bg.png";

export default function MapCard({
  _id,
  artist,
  bpm,
  creator,
  customMap,
  customSong,
  diff,
  handleDelete,
  hp,
  image,
  index,
  isPooler,
  length,
  mapId,
  mod,
  od,
  pooler,
  sr,
  title,
  showTourney,
  tourney,
  stage,
}) {
  return (
    <Card
      title={
        <div className="MapCard-title">
          <div className={`MapCard-icon mod-${mod}`}></div>
          {showTourney && (
            <span>
              {prettifyTourney(tourney)}
              &nbsp;-&nbsp;
              {stage}
              &nbsp;-&nbsp;
            </span>
          )}
          {`${mod}${index}`}
          <div style={{ marginRight: 12 }} />
          {customMap && (
            <Tooltip title="GTS Custom Map">
              <img className="MapCard-overlay-icon" src={CustomMapBadge} />
            </Tooltip>
          )}
          {customSong && (
            <Tooltip title="GTS Custom Song">
              <img className="MapCard-overlay-icon" src={CustomSongBadge} />
            </Tooltip>
          )}
        </div>
      }
      bordered={true}
      cover={
        <a target="_blank" href={`https://osu.ppy.sh/b/${mapId}`} style={{ position: "relative" }}>
          <img src={image} onError={(e) => (e.target.src = DefaultBG)} />
        </a>
      }
      extra={
        isPooler() ? (
          <Popconfirm
            title={`Are you sure you want to remove ${mod}${index}?`}
            onConfirm={() => handleDelete(_id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        ) : (
          <a href={`osu://b/${mapId}`}>
            <DownloadOutlined style={{ fontSize: "18px" }} />
          </a>
        )
      }
      className="MapCard-card"
    >
      <div className="MapCard-row MapCard-primary">{`${title} [${diff}]`}</div>
      <div className="MapCard-row">{artist}</div>
      <div className="MapCard-row MapCard-small">{`Mapset by ${creator}`}</div>
      {!customMap && <div className="MapCard-row MapCard-small">{`Picked by ${pooler}`}</div>}

      <div className="MapCard-divider"></div>

      <div className="MapCard-attr-row">
        <div className="MapCard-attr">
          <StarOutlined /> {sr}
        </div>
        <div className="MapCard-attr">
          <ClockCircleOutlined /> {length}
        </div>
        <div className="MapCard-attr">
          <DashboardOutlined /> {bpm}bpm
        </div>
      </div>

      <div className="MapCard-attr-row">
        <div className="MapCard-attr">
          <span className="u-bold">OD:</span> {od}
        </div>
        <div className="MapCard-attr">
          <span className="u-bold">HP:</span> {hp}
        </div>
      </div>
    </Card>
  );
}

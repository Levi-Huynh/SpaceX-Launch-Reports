import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import './styles.css';
import {css, jsx} from '@emotion/core'

interface Props {
  data: LaunchListQuery;
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data }) => (
  <div css={css`
  height: 100vh;
  overflow: hidden auto;
  background-color: #ececec;
  width: 300px;
  padding-left: 20px;
  padding-right: 20px;
  `}>
    <h3>Launches</h3>
    <ol 
    css={css`
    list-style: none;
    margin: 0;
    padding: 0;
    `}
    >
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li key={i} 
              css={css`
              padding-top: 20px;
              padding-bottom: 20px;
              border-top: 1px solid #919191;
              cursor: pointer;
              `}

              >
                {launch.mission_name} ({launch.launch_year})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default LaunchList;
 /** @jsx jsx */
import * as React from 'react';
import { LaunchProfileQuery } from '../../generated/graphql';
import './styles.css';
import {css, jsx} from '@emotion/core'

interface Props {
  data: LaunchProfileQuery;
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>;
  }

  return (
    <div 
    css={
      css`
      height: 100vh;
      max-height: 100%;
      width: calc(100vw - 300px);
      overflow: hidden auto;
      padding-left: 20px;
      padding-right: 20px;
      `
    }
    >
      <div 
      css={
        css`
        margin-top: 40px;
        `
      }
      >
        <span>Flight {data.launch.flight_number}: </span>
        {data.launch.launch_success ? (
          <span 
          css={
            css`
            color: #2cb84b;
            `
          }
          
          >Success</span>
        ) : (
          <span 
          css={
            css`
            color: #ff695e;
            `
          }
          
          >Failed</span>
        )}
      </div>
      <h1 
      css={
        css`
        color: #ff695e;
        
        `

      }
      
      >
        {data.launch.mission_name}
        {data.launch.rocket &&
          ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
      </h1>
      <p className={`${className}__description`}>{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div 
        css={
          css`
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 40px;
          padding-bottom: 100px;
          
          `

        }
        
        >
          {data.launch.links.flickr_images.map(image =>
            image ? <img src={image} 
            css={
              css`
              width: 100%;
              `
            }
            
            key={image} /> : null,
          )}
        </div>
      )}
    </div>
  );
};

export default LaunchProfile;
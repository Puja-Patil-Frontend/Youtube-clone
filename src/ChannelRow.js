import React from 'react'
import {Avatar} from "@material-ui/core";
import './ChannelRow.css';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function ChannelRow({image,channel,verified,subs,noOfvideos,description})
{
    return(
        <div className='channelRow'>
        <Avatar className='channelRow_logo'
        alt={channel} src={image}/>
        <div className='channelRow_text'>
            <h4>
                {channel} {verified && <VerifiedIcon/>}
            </h4>
            <p>
                {subs} subscribers . {noOfvideos} videos
            </p>
            <p>{description}</p>
            </div>
        </div>
    )
}
export default ChannelRow;
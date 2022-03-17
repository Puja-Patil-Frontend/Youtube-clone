import React from 'react';
import './SearchPage.css';
import  TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow'; 
import ChannelRow from "./ChannelRow.css";

function SearchPage(){
    return(
        <div className='searchPage'>
            <h2>Search</h2>
            <div className='searchPage_filter'>
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
            channel='clever Programmer'
            verified=''
            subs='1.1M subscriber'
            noOfvideos={382}
            description='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...'
            />
            <ChannelRow
            image='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo'
            channel='clever Programmer'
            verified=''
            subs='1.1M subscriber'
            noOfvideos={382}
            description='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ...'
            />
            <hr/>
            <VideoRow />
        </div>
    )
}
export default SearchPage;
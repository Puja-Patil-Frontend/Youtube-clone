import React from 'react'
import './Sidebar.css';
import HomeIcon from "@material-ui/icons/Home";
import SidebarRow from './SidebarRow';
import  WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import  HistoryIcon  from '@material-ui/icons/History';
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import  WatchLaterIcon from '@material-ui/icons/WatchLater';
function Sidebar(){
    return(
        <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon}  title='Home'/>
        <SidebarRow Icon={WhatshotIcon} title='Trending'/>
        <SidebarRow Icon={SubscriptionsIcon}title='Subscription'/>
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon}title='Library'/>
        <SidebarRow Icon={HistoryIcon}title='History'/>
        <SidebarRow Icon={OndemandVideoIcon}title='Your videos'/>
        <SidebarRow Icon={WatchLaterIcon}title='Watch Later'/>
        <SidebarRow Icon={ThumbDownAltOutlinedIcon}title='Linked video'/>
        <SidebarRow Icon={ExpandLessOutlinedIcon}title='Show more'/>
        <hr/>
        </div>

    )
}
export default Sidebar;
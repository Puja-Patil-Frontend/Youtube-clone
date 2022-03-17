import React from 'react';
import  './Recommended.css';
import VideoCard from './VideoCard';

function Recommended(){
    return(
        <div className='recommended'>
        <h2>Recommended</h2>
         <div className='recommended_videos'>
             <VideoCard
             title='Become a web developer in 10mins'
             views='5.3kviews'
             timestamp='1 days ago'
             channelImage='https://yt3.ggpht.com/b068gn4I8zSyH-vk_F-4L1GCEOvsrRHfHWQ1H61bT2600MPWmgArshwmmoBnZOduYFtBb7JNvg=s68-c-k-c0x00ffffff-no-rj'
             channel='sony channel'
             image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8To6h8NRjGBNfTbRaLOWwPrnhPmorFd0tw&usqp=CAU'
             />
             <VideoCard
             title='How to Make an AMAZON Clone with REACT JS for Beginners (in 4 hours)'
             views='508K views'
             timestamp='Streamed 1 year ago'
             channelImage='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'
             channel='cleaverprogrammer.com'
             image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4Pv4YPsyT7acAk1yvl4RJanUOnXWhs-hxg&usqp=CAU'
             
             />
             <VideoCard
             title='STOP watching tutorials. Code like this instead.'
             views='198K views'
             timestamp='9 months ago'
             channelImage='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'
             channel='cleaverprogrammer.com'
             image='data:image/jpeg;base64,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'
             />
             <VideoCard
             title='How to remove duplicates from an array... - Clever Programmer'
             views='198K views'
             timestamp='9 months ago'
             channelImage='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'
             channel='cleaverprogrammer.com'
             image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-PQxF3eihHPGMBUUStowf9U0XM_wUfStFg&usqp=CAU'
             />
             <VideoCard
             title='Functional Programming in Java - Code for Maintainability'
             views='2.3K views'
             timestamp='9 months ago'
             channelImage='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'
             channel='cleaverprogrammer.com'
             image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-PQxF3eihHPGMBUUStowf9U0XM_wUfStFg&usqp=CAU'
             />
             <VideoCard
             title='Functional Programming in Java - Code for Maintainability'
             views='2.3K views'
             timestamp='9 months ago'
             channelImage='https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj'
             channel='cleaverprogrammer.com'
             image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5E94am-XNuCWLzvxPAmBu6AByQUa0kJSNQ&usqp=CAU'
             />
             <VideoCard/>
             <VideoCard/>
             <VideoCard/>
             
             
             
             
             </div>
        </div>
    )
    }
export default Recommended;
import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
         <h2 >Clever Programmer</h2>
         <h3>
         <FiberManualRecordIcon/>
         Rafeh Qazi 
         </h3>
         </div>
        <CreateIcon/>
       
         </div> 
         <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
         <SidebarOptions Icon={InboxIcon} title="Mensions & reactions" />
         <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
         <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
         <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
         <SidebarOptions Icon={AppsIcon} title="Apps" />
         <SidebarOptions Icon={FileCopyIcon} title="File browser" />
         <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
         <hr />
         <SidebarOptions Icon={ExpandMoreIcon} title="Channel" />
         <hr />
         <SidebarOptions Icon={AddIcon} title="Add Channel" />
        </div>
    )
}

export default Sidebar

import { DeleteOutline, InsertDriveFileOutlined, MailOutline, Photo, SendOutlined, StarRateOutlined } from "@mui/icons-material";

export const SIDEBAR_DATA = [
    {
        name : 'inbox',
        title : 'Inbox',
        icon : Photo
    },
    {
        name : 'starred',
        title : 'Starred',
        icon : StarRateOutlined
    },
    {
        name : 'sentEmais',
        title : 'Sent',
        icon : SendOutlined
    },
    {
        name : 'drafts',
        title : 'Drafts',
        icon : InsertDriveFileOutlined
    },
    {
        name : 'bin',
        title : 'Bin',
        icon : DeleteOutline
    },
    {
        name : 'allEmails',
        title : 'All Mail',
        icon : MailOutline
    }
] 

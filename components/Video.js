import { useState } from "react";
import { Button, Tooltip } from "antd";
import { VideoCameraOutlined, CloseOutlined } from '@ant-design/icons';

const Video = () => {
    const [status, setStatus] = useState(true);

    return (
        <Tooltip title="Camera">
            <Button 
                type="primary" 
                shape="circle"
                icon={status ? <VideoCameraOutlined /> : <CloseOutlined />} 
                onClick={() => setStatus(!status)}
            >
            </Button>  
        </Tooltip>
    );
}

export default Video;
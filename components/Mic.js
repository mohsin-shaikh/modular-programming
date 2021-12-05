import { useState } from "react";
import { Button, Tooltip } from "antd";
import { AudioOutlined, AudioMutedOutlined } from '@ant-design/icons';

const Mic = () => {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <Tooltip title="Mic">
            <Button 
                type="primary" 
                shape="circle"
                icon={isMuted ? <AudioOutlined /> : <AudioMutedOutlined />} 
                onClick={() => setIsMuted(!isMuted)}
            >
            </Button>  
        </Tooltip>
    );
}

export default Mic;
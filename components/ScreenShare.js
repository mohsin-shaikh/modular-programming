import React, { useState, useEffect } from 'react';

export default function ModalVideo(props) {
    const [video,] = useState(React.createRef());

    const videoError = (error) => {
        console.log("error", error);
    }

    const handleVideo = (stream) => {
        video.current.srcObject = stream;
    }

    useEffect(() => {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
        // if (navigator.getUserMedia) {
        //     navigator.getUserMedia({video: true}, handleVideo, videoError);
        // }
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getDisplayMedia({
                audio: false,
                video: {
                    cursor: "always",
                },
            }).then(handleVideo).catch(videoError);        
        }
    });

    return (
        <div>
            <video style={{width: "100%", height: "100%"}} ref={video} autoPlay={true} />
        </div>
    )
}
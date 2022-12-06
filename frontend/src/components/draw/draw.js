import React, {useEffect, useRef} from "react";

function Draw(img, x, y, w, h) {
    const canvasRef = useRef();

    const drawRectangle = () => {
        const context = canvasRef.current.getContext("2d");
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.strokeRect(50, 30, 110, 90);
    };

    useEffect(() => {
        drawRectangle();
    }, []);

  //  let url = "url(" + img.img + ")";

    let url = "url(https://sfo3.digitaloceanspaces.com/csci4970-agro-ai-images/AI_Images/original_corn_pics/images_handheld/DSC00033.JPG)";

    return (
        <div>
            <canvas
                ref={canvasRef}
                style={{
                width: "100%",
                height: "auto",
                aspectRatio: 3/2,
                background: url,
                backgroundSize: "contain",
                }}
            />
        </div>
    );
}
export default Draw;
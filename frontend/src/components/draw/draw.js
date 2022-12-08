import React, {useEffect, useRef} from "react";

function Draw(img) {
    const canvasRef = useRef();

    const drawRectangle = () => {
        const context = canvasRef.current.getContext("2d");
        context.lineWidth = 2;
        context.strokeStyle = "blue";
        context.strokeRect(img.sickAreaAi.x, img.sickAreaAi.y, img.sickAreaAi.width, img.sickAreaAi.height);
        context.strokeStyle = "red";
        context.strokeRect(img.sickAreaActual.x, img.sickAreaActual.y, img.sickAreaActual.width, img.sickAreaActual.height);
    };

    useEffect(() => {
        drawRectangle();
    }, []);

    let url = "url(" + img.img + ")";


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
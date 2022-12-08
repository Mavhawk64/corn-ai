import React, {useEffect, useRef} from "react";

function Draw(img) {

    const canvasRef = useRef();

    const drawRectangle = () => {

        const context = canvasRef.current.getContext("2d");
        context.lineWidth = 2;
        context.strokeStyle = "blue";
        context.strokeRect(Number(img.sickAreaAi.x), Number(img.sickAreaAi.y), Number(img.sickAreaAi.width), Number(img.sickAreaAi.height));
        context.strokeStyle = "red";
        context.strokeRect(Number(img.sickAreaActual.x), Number(img.sickAreaActual.y), Number(img.sickAreaActual.width), Number(img.sickAreaActual.height));

    };

    useEffect(() => {
        drawRectangle();
    });

    let url = "url(" + img.img + ")";


    return (
        <div>
            <canvas
                ref={canvasRef}
                style={{
                width: "40%",
                height: "auto",
                aspectRatio: 3/2,
                backgroundImage: url,
                backgroundSize: "contain",
                }}
            />
        </div>
    );
}
export default Draw;
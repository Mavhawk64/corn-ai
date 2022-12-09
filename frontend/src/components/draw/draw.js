import React, {useEffect, useRef} from "react";

function Draw(img) {

    const canvasRef = useRef();

    const drawRectangle = () => {

        const context = canvasRef.current.getContext("2d");
        context.clearRect(0, 0, 600, 400);
        context.lineWidth = 2;
        context.strokeStyle = "blue";
        context.strokeRect(Number(img.sickAreaAi.x) * 600, Number(img.sickAreaAi.y) * 400, Number(img.sickAreaAi.w) * 600, Number(img.sickAreaAi.h) * 400)
        context.strokeStyle = "red";
        for(let k in img.sickAreaActual) {
            context.strokeRect(Number(img.sickAreaActual[k].x) * 600, Number(img.sickAreaActual[k].y) * 400, Number(img.sickAreaActual[k].w) * 600, Number(img.sickAreaActual[k].h) * 400);
        }

    };

    useEffect(() => {
        drawRectangle();
    });

    let url = "url(" + img.img + ")";


    return (
        <div>
            <canvas
                width="600px"
                height="400px"
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
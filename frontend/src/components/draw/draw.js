import React, {useEffect, useRef} from "react";

function Draw(img) {
    const canvasRef = useRef();

    const drawRectangle = () => {
        const context = canvasRef.current.getContext("2d");
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.strokeRect(50, 30, 110, 90);
        context.strokeRect(170, 65, 100, 80);
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
                width: "800px",
                height: "600px",
                background: url,
                }}
            />
        </div>
    );
}
export default Draw;
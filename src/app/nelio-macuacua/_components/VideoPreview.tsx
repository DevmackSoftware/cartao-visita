"use client";

import Image from "next/image";
import { useState } from "react";

export default function VideoPreview() {
    const [videoStarted, setVideoStarted] = useState(false);

    return (
        <div className="">
            {/* Imagem enquanto o vídeo não iniciou */}
            {!videoStarted && (
                <Image
                    src="./letter-glitch-1788078568665.png"
                    alt="Preview"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-50"
                />
            )}

            {/* Vídeo */}
            <video
                src="./letter-glitch-1787995840126.webm"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onPlaying={() => setVideoStarted(true)}
                className="w-full object-cover absolute top-0 left-0 h-full -z-10 opacity-50"
            />
        </div>
    );
}
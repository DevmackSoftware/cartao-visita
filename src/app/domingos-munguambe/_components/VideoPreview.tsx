"use client";

import Image from "next/image";

export default function VideoPreview() {
    return (
        <div className="">
            <Image
                src="/beams-1788078445535.png"
                alt="Preview"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-50"
            />
        </div>
    );
}
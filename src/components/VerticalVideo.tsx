"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const videoUrl =
  "https://dvbac3tjkru9l.cloudfront.net/landing/IMG_1753%20(1).MP4";

export function VerticalVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
      <div className="absolute -inset-5 rounded-[44px] bg-mint/15 blur-3xl sm:-inset-8 sm:rounded-[56px]" />
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[30px] border-[6px] border-deep bg-deep shadow-[0_30px_70px_rgba(0,53,44,0.28)] sm:rounded-[34px] sm:border-[8px]">
        <video
          ref={videoRef}
          className="h-full w-full bg-deep object-contain"
          controls={started}
          playsInline
          preload="metadata"
          aria-label="Demonstração do aplicativo GolNext"
          onPlay={() => setStarted(true)}
          onEnded={() => setStarted(false)}
        >
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não oferece suporte à reprodução de vídeos.
        </video>

        {!started && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 bg-deep px-8">
            <Image
              src="/golnext-logo-light.png"
              alt="GolNext"
              width={1180}
              height={210}
              className="h-auto w-full max-w-[230px]"
              priority={false}
            />
            <button
              type="button"
              onClick={() => void videoRef.current?.play()}
              className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-mint text-deep shadow-[0_14px_34px_rgba(29,233,182,0.3)] transition hover:scale-105 hover:brightness-95"
              aria-label="Reproduzir vídeo do GolNext"
            >
              <svg
                viewBox="0 0 24 24"
                width="34"
                height="34"
                fill="currentColor"
                aria-hidden="true"
                className="translate-x-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

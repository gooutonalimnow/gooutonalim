"use client"

import { useState, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

interface VideoPlayerProps {
  src: string
  className?: string
}

export function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`h-full w-full object-cover ${className}`}
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm transition-opacity hover:bg-primary"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
    </div>
  )
}

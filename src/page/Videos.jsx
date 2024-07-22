import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();
    const {
        isLoding,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["videos", keyword],
        queryFn: () => youtube.search(keyword),
        staleTime: 1000 * 60 * 1,
    });
    return (
        <>
            {isLoding && <p>Loding..</p>}
            {error && <p>Sommething is wrong</p>}
            {videos && (
                <ul className="max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-6 box-border">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </ul>
            )}
        </>
    );
}

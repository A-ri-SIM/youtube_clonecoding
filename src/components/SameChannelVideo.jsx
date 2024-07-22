import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

export default function SameChannelVideo({ id }) {
    const { youtube } = useYoutubeApi();
    const {
        isLoding,
        error,
        data: videos,
    } = useQuery({
        queryKey: ["search", id],
        queryFn: () => youtube.sameChannelVideo(id),
        staleTime: 1000 * 60 * 5,
    });
    return (
        <div>
            {isLoding && <p>Loding..</p>}
            {error && <p>Sommething is wrong</p>}
            {videos && (
                <ul>
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} type="list" />
                    ))}
                </ul>
            )}
        </div>
    );
}

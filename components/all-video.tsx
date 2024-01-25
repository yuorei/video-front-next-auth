import { Video } from "@/app/model/video"
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { timeAgo } from "@/lib/time";

export default function AllVideo() {
  const GET_VIDEOS_QUERY = gql`
  query GetVideos {
    videos {
      id
      videoURL
      title
      thumbnailImageURL
      createdAt
      uploader {
        id
        name
      }
    }
  }
`;

  const { loading, error, data } = useQuery(GET_VIDEOS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>
  return (
    <main>
      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.videos.map((video: Video, index: any) => (
            <Link href={`/video/${video.id}`}> {/* 動画詳細ページのURLを指定 */}
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-auto" src={video.thumbnailImageURL} alt={video.title} />
                <div className="p-4 flex items-center">
                  <Link href={`/user/${video.uploader.id}`}> {/* 投稿者のページのURLを指定 */}
                    <img
                      src={""} // 投稿者のアイコン画像のURL
                      alt="Uploader Icon"
                      className="w-10 h-10 rounded-full mr-4" // アイコンのサイズと丸みを調整
                    />
                  </Link>
                  <div>
                    <h3 className="font-semibold text-lg break-words">{video.title}</h3>
                    <p className="text-gray-600 break-words">{video.uploader.name}</p>
                    <p className="text-gray-500 text-sm">{timeAgo(video.createdAt)}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

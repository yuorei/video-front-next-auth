import CustomLink from "@/components/custom-link"
import packageJSON from "../package.json"
import HLSPlayer from '@/components/HLSPlayer';

export default function Index() {
  const videoSrc = 'http://localhost:9000/video-service/output_video_2237e174-a98e-11ee-a8a8-6a6798be1bd7.m3u8';
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink>{" "}
        for authentication. Check out the{" "}
        <CustomLink href="/server-example" className="underline">
          Server
        </CustomLink>{" "}
        and the{" "}
        <CustomLink href="/client-example" className="underline">
          Client
        </CustomLink>{" "}
        examples to see how to secure pages and get session data.
      </p>
      <p>
        Current{" "}
        <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink>{" "}
        version: <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
      </p>
      <HLSPlayer src={videoSrc} />
    </div>
  )
}

"use client";
import type { Session } from "next-auth";
import AllVideo from "@/components/all-video";

export default function Index({ session }: { session: Session }) {
  return (
    <main className="max-w-full">
      <AllVideo />
    </main>
  );
}

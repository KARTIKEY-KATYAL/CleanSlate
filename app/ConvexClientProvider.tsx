"use client";
import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Ensure NEXT_PUBLIC_CONVEX_URL is available
if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  console.error(
    "NEXT_PUBLIC_CONVEX_URL is not defined in the environment variables."
  );
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}

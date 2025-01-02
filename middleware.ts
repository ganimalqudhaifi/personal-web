import projectList from "./data/ProjectList";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/projects")) {
    const pathname = request.nextUrl.pathname;
    const segments = pathname.split("/");

    if (segments.length === 3 && segments[1] === "projects") {
      const projectId = segments[2];

      const currentProject = projectList.find(
        (project) => project.id === projectId,
      );
      if (!currentProject) {
        return NextResponse.redirect(new URL("/projects", request.url));
      }
    }

    return NextResponse.next();
  }
}

"use client";
import BackButton from "~/components/BackButton";
import useEmbeddedDashboard from "~/hooks/useEmbeddedDashboard";

const DASHBOARD_ID = "4ba2038c-446e-4b2a-910f-9b530101caad";

function VideoPage() {
  const { embeddedRef } = useEmbeddedDashboard({
    dashboardId: DASHBOARD_ID,
    permissions: {
      resources: [
        {
          id: DASHBOARD_ID,
          type: "dashboard",
        },
      ],
      rls: [
        { clause: "project_id='mello'" },
        { clause: "video_id='UAxLrfRQQWxK' OR video_id='UB3dRlQabYbR'" },
      ],
      user: {
        username: "public_user",
        first_name: "public",
        last_name: "user",
      },
    },
    dashboardUiConfig: {
      hideTitle: true,
      hideTab: true,
      hideChartControls: true,
      filters: {
        visible: false,
        expanded: false,
      },
    },
  });

  return (
    <div className="flex bg-zinc-100 p-4 flex-col  min-h-screen gap-4">
      <BackButton />
      <div className="flex-1 flex rounded-lg bg-white shadow border overflow-hidden">
        <div className="flex-1" ref={embeddedRef}></div>
      </div>
    </div>
  );
}

export default VideoPage;

"use client";
import BackButton from "~/components/BackButton";
import useEmbeddedDashboard from "~/hooks/useEmbeddedDashboard";

const DASHBOARD_ID = "650d597f-f14d-43b9-95d5-47fedeb5efb6";

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
      rls: [],
      user: {
        first_name: "John",
        last_name: "Doe",
        username: "john_doe",
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
      urlParams: {
        msg: "It's working",
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

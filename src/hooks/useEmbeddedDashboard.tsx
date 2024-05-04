"use client";
import { useEffect, useRef } from "react";
import { UiConfigType, embedDashboard } from "@superset-ui/embedded-sdk";
import axios from "axios";

const SUPERSET_URL =
  process.env.NEXT_PUBLIC_SUPERSET_URL || "http://localhost:8088";

interface Resource {
  id: string;
  type: "dashboard";
}

interface RLS {
  clause: string;
  dataset?: number;
}

interface User {
  username: string;
  first_name: string;
  last_name: string;
}

interface Permissions {
  resources: Resource[];
  rls: RLS[];
  user: User;
}

interface Props {
  dashboardId: string;
  permissions: Permissions;
  dashboardUiConfig: UiConfigType;
}

function useEmbeddedDashboard({
  dashboardId,
  permissions,
  dashboardUiConfig,
}: Props) {
  const embeddedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embeddedRef.current) return;

    const fetchGuestToken = async () => {
      try {
        const res = await fetch(
          `${SUPERSET_URL}/api/v1/guest/get_guest_token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(permissions),
            redirect: "follow",
          },
        );
        const data = await res.json();
        return data.token;
      } catch (err) {
        console.log(err);
      }
    };

    embedDashboard({
      supersetDomain: SUPERSET_URL,
      mountPoint: embeddedRef.current,
      fetchGuestToken: fetchGuestToken,
      id: dashboardId,
      dashboardUiConfig,
    });

    const iframe = embeddedRef.current.querySelector("iframe");
    if (!iframe) return;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
  }, [dashboardId, dashboardUiConfig, permissions]);

  return { embeddedRef };
}

export default useEmbeddedDashboard;

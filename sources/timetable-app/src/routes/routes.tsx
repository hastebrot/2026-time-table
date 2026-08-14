import { useEffect } from "react";
import { useNavigate, type RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: () => {
      const navigate = useNavigate();
      useEffect(() => {
        navigate("/app", { replace: true });
      }, [navigate]);
      return null;
    },
  },
  {
    path: "/app",
    Component: () => (
      <div data-theme="dark" className="p-4 min-h-dvh">
        <div>App</div>
      </div>
    ),
  },
];

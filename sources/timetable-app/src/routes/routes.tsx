import { useEffect } from "react";
import { useNavigate, type RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: () => {
      const navigate = useNavigate();
      useEffect(() => {
        navigate("/home", { replace: true });
      }, [navigate]);
      return null;
    },
  },
  {
    path: "/home",
    Component: () => (
      <div data-theme="dark" className="p-4 min-h-dvh">
        <div>Home</div>
      </div>
    ),
  },
];

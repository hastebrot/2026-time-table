import { useEffect } from "react";

export const useDocumentTitle = (documentTitle: string) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const domainName = toDomainName(document.location.hostname);
    const title = domainName.length > 0 ? `${documentTitle} (${domainName})` : documentTitle;
    if (document.title !== title) {
      document.title = title;
    }
  }, [documentTitle]);
};

const toDomainName = (hostname: string): string => {
  return hostname.split(".").slice(-2).join(".");
};

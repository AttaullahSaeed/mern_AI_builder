import { useSandpack } from "@codesandbox/sandpack-react";
import { useEffect } from "react";

const SandpackErrorMonitor = ({ onErrorChange }) => {
  const { sandpack } = useSandpack();
  const { error } = sandpack;

  useEffect(() => {
    if (error) {
      const msg = error.message || "";
      const isNetworkError =
        msg.includes("Failed to fetch") ||
        msg.includes("col.csbops.io") ||
        msg.includes("ERR_CONNECTION_TIMED_OUT") ||
        msg.includes("net::ERR");

      if (isNetworkError) {
        onErrorChange(false);
        return;
      }
      // Trigger error overlay for actual runtime/syntax errors
      onErrorChange(true);
      return;
    }

    // Clear error state when there are no errors
    onErrorChange(false);
  }, [error, onErrorChange]);

  return null;
};

export default SandpackErrorMonitor;

import { useEffect } from "react";

const PrintLogic = () => {
  useEffect(() => {
    const handleBeforePrint = () => {
      document.body.classList.add("first-print-page");
    };

    const handleAfterPrint = () => {
      document.body.classList.remove("first-print-page");
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    // Cleanup
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PrintLogic;

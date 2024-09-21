import { useEffect } from "react";

const useBeforeUnload = (handler: (event: BeforeUnloadEvent) => void) => {
  useEffect(() => {
    const handleBeforeUnload = (e: Event) => {
      const event = e as BeforeUnloadEvent; // Type assertion for BeforeUnloadEvent
      event.preventDefault();
      handler(event); // Call the provided handler function
      event.returnValue = ""; // Required for modern browsers to show the confirmation dialog
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handler]);
};

export default useBeforeUnload;

const registerServiceWorker = async () => {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });
  } catch (error) {
    console.info("PWA registration skipped.", error);
  }
};

window.addEventListener("load", () => {
  void registerServiceWorker();
});

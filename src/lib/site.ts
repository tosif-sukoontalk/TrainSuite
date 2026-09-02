export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sukoontalks.app&hl=en_IN";

export const SUPPORT_EMAIL = "support@sukoontalk.in";

export const COMPANY_NAME = "Sukoontalk Digital Private Limited";

export const COMPANY_ADDRESS =
  "KM00521401, Jaypee Wishtown, Noida-134, Uttar Pradesh, India";

export async function openPlayStore() {
  const newWindow = window.open(PLAY_STORE_URL, "_blank");
  if (newWindow) {
    newWindow.opener = null;
    return;
  }

  const copied =
    (await navigator.clipboard?.writeText(PLAY_STORE_URL).then(() => true).catch(() => false)) ||
    false;

  const { toast } = await import("sonner");

  if (copied) {
    toast.success("Play Store link copied", {
      description: "Paste it into your browser to download the app.",
    });
  } else {
    toast.error("Could not open Play Store automatically", {
      description: `Copy this link and open it in your browser: ${PLAY_STORE_URL}`,
      duration: 10000,
    });
  }
}

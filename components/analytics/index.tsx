import { GoogleAnalytics } from "./google-analytics";
import { MicrosoftClarity } from "./clarity";

export function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
    </>
  );
} 
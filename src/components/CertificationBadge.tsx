import type { Certification } from "@/lib/portfolio-data";
import googleCloudImg from "@/assets/certs/googlecloud.jpg";
import awsImg from "@/assets/certs/aws.png";
import upGradImg from "@/assets/certs/upgrad.jpg";
import cognixiaImg from "@/assets/certs/cognixia.webp";

export function CertificationBadge({
  type,
  className = "w-20 h-12",
}: {
  type: Certification["badgeType"];
  className?: string;
}) {
  switch (type) {
    case "googlecloud":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm border border-border/80 dark:bg-[#1A202C] overflow-hidden ${className}`}
          title="Google Cloud Certified"
        >
          <img
            src={googleCloudImg}
            alt="Google Cloud Official Logo"
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      );

    case "aws":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-[#0B1926] p-1.5 shadow-sm border border-amber-500/20 overflow-hidden ${className}`}
          title="Amazon Web Services"
        >
          <img
            src={awsImg}
            alt="AWS Official Logo"
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      );

    case "upgrad":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm border border-red-500/20 dark:bg-[#1A202C] overflow-hidden ${className}`}
          title="upGrad"
        >
          <img
            src={upGradImg}
            alt="upGrad Official Logo"
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      );

    case "cognixia":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm border border-cyan-500/20 dark:bg-white overflow-hidden ${className}`}
          title="Cognixia"
        >
          <img
            src={cognixiaImg}
            alt="Cognixia Official Logo"
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      );

    case "kodekloud":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-[#0F172A] p-2 shadow-sm border border-[#20C997]/30 overflow-hidden ${className}`}
          title="KodeKloud"
        >
          {/* Authentic KodeKloud Logo */}
          <svg viewBox="0 0 90 50" fill="none" className="size-full">
            <g transform="translate(6, 12)">
              <path
                d="M11 2a4.5 4.5 0 0 0-4.2 3.1A4 4 0 0 0 3 12.5h12A3.5 3.5 0 0 0 16 6.5a4.5 4.5 0 0 0-5-4.5z"
                fill="none"
                stroke="#20C997"
                strokeWidth="2"
              />
              <path
                d="M6.5 7.5l-1.8 1.8 1.8 1.8M11.5 7.5l1.8 1.8-1.8 1.8"
                stroke="#38BDF8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="21"
                y="14.5"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontSize="12"
                fontWeight="800"
                fill="#ffffff"
                letterSpacing="-0.3"
              >
                KodeKloud
              </text>
            </g>
          </svg>
        </div>
      );

    case "coursera":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-[#0056D2] p-2 shadow-sm border border-blue-600/30 overflow-hidden ${className}`}
          title="Coursera"
        >
          <svg viewBox="0 0 90 50" fill="none" className="size-full">
            <text
              x="45"
              y="32"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontSize="16"
              fontWeight="800"
              fill="#ffffff"
              textAnchor="middle"
              letterSpacing="-0.5"
            >
              coursera
            </text>
          </svg>
        </div>
      );

    case "microsoft":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm border border-border/80 dark:bg-[#1A202C] overflow-hidden ${className}`}
          title="Microsoft Certified"
        >
          <svg viewBox="0 0 90 50" fill="none" className="size-full">
            <g transform="translate(8, 14)">
              <rect x="0" y="0" width="9" height="9" fill="#F25022" />
              <rect x="11" y="0" width="9" height="9" fill="#7FBA00" />
              <rect x="0" y="11" width="9" height="9" fill="#00A4EF" />
              <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
              <text
                x="26"
                y="15"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontSize="11.5"
                fontWeight="600"
                fill="currentColor"
                className="text-foreground"
              >
                Microsoft
              </text>
            </g>
          </svg>
        </div>
      );

    case "newrelic":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-[#1D252C] p-2 shadow-sm border border-[#1CE783]/30 overflow-hidden ${className}`}
          title="New Relic"
        >
          <svg viewBox="0 0 90 50" fill="none" className="size-full">
            <g transform="translate(6, 12)">
              <path
                d="M10 2L2 7v10l8 5 8-5V7l-8-5zm0 3.3L15 9 10 12.3 5 9 10 5.3zM4 10.5l5 3v6l-5-3.5v-5.5zm7 9v-6l5-3v5.5l-5 3.5z"
                fill="#1CE783"
                transform="scale(0.85)"
              />
              <text
                x="20"
                y="16"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontSize="10.5"
                fontWeight="700"
                fill="#ffffff"
              >
                New Relic
              </text>
            </g>
          </svg>
        </div>
      );

    case "github":
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-[#24292E] p-2 shadow-sm border border-purple-500/30 overflow-hidden ${className}`}
          title="GitHub"
        >
          <svg viewBox="0 0 90 50" fill="none" className="size-full">
            <g transform="translate(10, 13)">
              <path
                d="M10 2C5.58 2 2 5.58 2 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.39 0-.19-.01-.69-.01-1.36-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.74.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C17.71 16.53 20 13.54 20 10c0-4.42-3.58-8-8-8z"
                fill="#ffffff"
              />
              <text
                x="25"
                y="15"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontSize="12"
                fontWeight="700"
                fill="#ffffff"
              >
                GitHub
              </text>
            </g>
          </svg>
        </div>
      );

    case "linkedin":
    default:
      return (
        <div
          className={`flex shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] p-2 shadow-sm border border-blue-500/30 overflow-hidden ${className}`}
          title="LinkedIn Learning"
        >
          <svg viewBox="0 0 90 50" fill="none" className="size-full">
            <g transform="translate(6, 12)">
              <rect width="18" height="18" rx="3" fill="#ffffff" />
              <path
                d="M5 8v6H3V8h2zm-1-1.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 1.5h2v.9c.3-.5 1-1 2-1 1.8 0 2 1.2 2 3v3.1h-2V11c0-.7-.3-1.1-.9-1.1-.6 0-.9.4-.9 1.1v3H8V8z"
                fill="#0A66C2"
              />
              <text
                x="24"
                y="14"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontSize="11"
                fontWeight="700"
                fill="#ffffff"
              >
                Learning
              </text>
            </g>
          </svg>
        </div>
      );
  }
}

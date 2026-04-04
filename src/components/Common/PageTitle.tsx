import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";

type Props = {
  pageTitle: string;
  pageDescription: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function PageTitle({ pageTitle, pageDescription, breadcrumbs }: Props) {
  // Default breadcrumbs if none provided
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { name: "Acasă", href: "/" },
    { name: pageTitle, current: true }
  ];

  const breadcrumbsToUse = breadcrumbs || defaultBreadcrumbs;

  return (
    <section className="relative z-10 overflow-hidden bg-white pb-[50px] pt-[150px]">
      <div className="container">
        <div className="mx-[-16px]">
          <div className="w-full min-w-0 px-4 pb-6 md:pb-8">
            <Breadcrumbs items={breadcrumbsToUse} align="start" compact />
          </div>
          <div className="w-full min-w-0 px-4">
            <div className="max-w-5xl xl:max-w-6xl">
              <h1 className="mb-5 text-2xl font-bold text-black sm:text-3xl">
                {pageTitle}
              </h1>
              <p className="text-base font-medium leading-relaxed text-body-color">
                {pageDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="730"
            height="206"
            viewBox="0 0 730 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.08"
              width="136.991"
              height="563.705"
              transform="matrix(0.632736 0.774368 0.774368 -0.632736 -201.278 330.677)"
              fill="url(#paint0_linear_0:1)"
            />
            <rect
              opacity="0.05"
              width="345.355"
              height="563.705"
              transform="matrix(0.632736 0.774368 0.774368 -0.632736 74 330.677)"
              fill="url(#paint1_linear_0:1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="68.4956"
                y1="0"
                x2="68.4956"
                y2="563.705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="172.678"
                y1="0"
                x2="172.678"
                y2="563.705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="405"
            height="206"
            viewBox="0 0 405 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.08"
              width="289.718"
              height="563.705"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 603.461 -125.138)"
              fill="url(#paint0_linear_54:595)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_54:595"
                x1="144.859"
                y1="0"
                x2="144.859"
                y2="563.705"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
}

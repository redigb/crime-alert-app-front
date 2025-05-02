
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export function HomeIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1004.5 556.5Q985 576 957.5 576T911 557l-15-15v419q0 26-18.5 45t-45.5 19H640V737q0-13-9.5-22.5T608 705H416q-13 0-22.5 9.5T384 737v288H192q-27 0-45.5-19T128 961V542l-15 15q-19 19-46.5 19t-47-19.5T0 509t19-46L463 19q20-20 49-19t49 19l444 444q19 19 19 46t-19.5 47.5z"
      />
    </svg>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M22 10.5v-.783c0-1.94 0-2.909-.586-3.512c-.586-.602-1.528-.602-3.414-.602h-2.079c-.917 0-.925-.002-1.75-.415L10.84 3.521c-1.391-.696-2.087-1.044-2.828-1.02S6.6 2.918 5.253 3.704l-1.227.716c-.989.577-1.483.866-1.754 1.346C2 6.246 2 6.83 2 7.999v8.217c0 1.535 0 2.303.342 2.73c.228.285.547.476.9.54c.53.095 1.18-.284 2.478-1.042c.882-.515 1.73-1.05 2.785-.905c.884.122 1.705.68 2.495 1.075M8 2.5v15m7-12v4" />
        <path d="M17.5 12c2.435 0 4.5 2.017 4.5 4.463c0 2.485-2.098 4.23-4.036 5.415a.94.94 0 0 1-.927 0C15.102 20.681 13 18.957 13 16.463C13 14.016 15.065 12 17.5 12m0 4.5h.009" />
      </g>
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" viewBox="0 0 640 1024" {...props}><path fill="currentColor" d="m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577"/></svg>
  )
}

export function Chevronleft(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" viewBox="0 0 640 1024" {...props}><path fill="currentColor" d="m32 577l434 426q21 21 51 21t51-21l51-51q21-21 21-51t-21-51L281 512l338-338q21-21 21-51t-21-51l-51-51Q547 0 517 0t-51 21L32 449Q0 481 0 513t32 64"/></svg>
  )
}

export function LogoutIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8" {...props}><path fill="currentColor" d="M3 0v1h4v5H3v1h5V0zM2 2L0 3.5L2 5V4h4V3H2z"/></svg>
  )
}

export function User(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512" {...props}><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"/></svg>
  )
}

export function ReportIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path
          fill="currentColor"
          d="M36 35H12V21c0-6.627 5.373-12 12-12s12 5.373 12 12z"
        />
        <path
          strokeLinecap="round"
          d="M8 42h32M4 13l3 1m6-10l1 3m-4 3L7 7"
        />
      </g>
    </svg>
  );
}

export function SaveIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"
      />
      <path
        fill="currentColor"
        d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"
        opacity=".5"
      />
    </svg>
  );
}
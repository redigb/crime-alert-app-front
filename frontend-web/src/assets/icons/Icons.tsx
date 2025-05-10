
interface IconProps extends React.SVGProps<SVGSVGElement> { }

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
    <svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" viewBox="0 0 640 1024" {...props}><path fill="currentColor" d="m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577" /></svg>
  )
}

export function Chevronleft(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.63em" height="1em" viewBox="0 0 640 1024" {...props}><path fill="currentColor" d="m32 577l434 426q21 21 51 21t51-21l51-51q21-21 21-51t-21-51L281 512l338-338q21-21 21-51t-21-51l-51-51Q547 0 517 0t-51 21L32 449Q0 481 0 513t32 64" /></svg>
  )
}

export function ChevronDown(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 392 448" {...props}><path fill="currentColor" d="m192 284l186-162q15-17 2-30q-17-17-30-2L192 228L36 90Q23 75 6 92q-14 14 3 30z" /></svg>
  )
}

export function LogoutIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 8 8" {...props}><path fill="currentColor" d="M3 0v1h4v5H3v1h5V0zM2 2L0 3.5L2 5V4h4V3H2z" /></svg>
  )
}

export function User(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512" {...props}><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4" /></svg>
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

export function Upload(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M7 9h2V5h3L8 1L4 5h3zm3-2.25v1.542L14.579 10L8 12.453L1.421 10L6 8.292V6.75L0 9v4l8 3l8-3V9z" /></svg>
  )
}

export function AlertTriangle(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fillRule="evenodd"  // ✅ corregido
        d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AlertCircle(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01" /></svg>
  )
}

export function Calendar(props: IconProps) {
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
        d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
}

export function Clock(props: IconProps) {
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
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </g>
    </svg>
  );
}

export function Eye(props: IconProps) {
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
        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
      />
    </svg>
  );
}

export function X(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.83em" height="1em" viewBox="0 0 537 654" {...props}><path fill="currentColor" d="M519 128L315 380l222 274h-93L269 437L93 654H0l223-274L19 128h93l157 194l156-194z" /></svg>
  )
}

export function Play(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440" /></svg>
  )
}

export function SkipBack(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path d="M96 96v320h79V274.2L416 416V96L175 237.8V96H96z" fill="currentColor" /></svg>
  )
}

export function SkipForward(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path d="M337 96v141.8L96 96v320l241-141.8V416h79V96h-79z" fill="currentColor" /></svg>
  )
}

export function Pause(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14 19V5h4v14zm-8 0V5h4v14z" /></svg>
  )
}

export function Maximize(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 3h6v2H5v4H3zm0 18h6v-2H5v-4H3zm12 0h6v-6h-2v4h-4zm6-18h-6v2h4v4h2z" /></svg>
  )
}

export function VolumeX(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path d="M12.92 3.316c.774-.69 1.983-.187 2.074.812L15 4.25v15.496c0 1.037-1.178 1.606-1.986 1.01l-.095-.076l-4.491-3.994a.75.75 0 0 0-.39-.182l-.108-.008H4.25a2.25 2.25 0 0 1-2.245-2.095L2 14.246V9.75a2.25 2.25 0 0 1 2.096-2.245l.154-.005h3.68a.75.75 0 0 0 .411-.123l.087-.067l4.491-3.993zm4.36 5.904L19 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L20.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L19 13.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L17.94 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06z" fill="currentColor" fill-rule="nonzero" /></svg>
  )
}

export function Volume2(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 11.975q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.538-.575t.787 0Q18.1 4.85 19.55 7.063T21 11.974t-1.45 4.913t-3.875 3.287q-.4.175-.788 0t-.537-.575q-.125-.375.05-.737t.55-.538q1.85-.85 2.95-2.562t1.1-3.788M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3zm9.5-3q0 1.05-.475 1.988t-1.25 1.537q-.25.15-.513.013T14 15.1V8.85q0-.3.263-.437t.512.012q.775.625 1.25 1.575t.475 2" /></svg>
  )
}

export function Filter(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M238.627 496H192V253.828l-168-200V16h456v37.612l-160 200v161.015ZM224 464h1.373L288 401.373V242.388L443.51 48H60.9L224 242.172Z" /></svg>
  )
}

export function Tag(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="7.5" cy="7.5" r=".5" fill="currentColor" /></g></svg>
  )
}

export function Separator(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" fill-rule="evenodd" d="M469.333 277.333H42.666v-42.666h426.667z" clip-rule="evenodd" /></svg>
  )
}

export function MessageCircle(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c3.255 2.777 3.695 7.266 1.029 10.501S11.659 20.922 7.7 19z" /></svg>
  )
}

export function Flag(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21v-5.313m0 0c5.818-4.55 10.182 4.55 16 0V4.313c-5.818 4.55-10.182-4.55-16 0z" /></svg>
  )
}

export function Like(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2M4 10h2v9H4zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7z" /></svg>
  )
}

export function Share(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.015 15.809a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m11.97-6.529a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m0 11.97a3.265 3.265 0 1 0 0-6.53a3.265 3.265 0 0 0 0 6.53m-2.971-4.614l-6.028-2.742m6.126-6.312l-6.224 3.395" /></svg>
  )
}

export function SimpleIcon(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 0C5.49 0 .257 5.362.257 12v12H12c6.51 0 11.743-5.362 11.743-12S18.51 0 12 0m0 3.51c.543 0 1.086.065 1.66.192c.383.128.639.383.639.766l-.638 10.085c0 .255-.256.511-.512.511c-.766.128-1.533.128-2.171 0c-.383 0-.639-.256-.639-.51L9.701 4.467c0-.383.256-.638.638-.766A7.6 7.6 0 0 1 12 3.51m.065 12.99q.67 0 1.339.095c.255 0 .384.256.384.384c.127.894.127 1.786 0 2.807c0 .256-.257.384-.384.384a9.4 9.4 0 0 1-2.68 0c-.256 0-.384-.256-.384-.384c-.128-.893-.128-1.786 0-2.807c0-.255.256-.384.383-.384a9.5 9.5 0 0 1 1.342-.095" /></svg>
  )
}

export function Search(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.89em" height="1em" viewBox="0 0 740 840" {...props}><path fill="currentColor" d="M734 668q8 9 0 17l-49 49q-3 3-8 3t-8-3L519 584q-50 38-112 55t-133 6q-53-8-99-33t-83-61t-59-85T3 366q-10-79 16-150T96 95t121-76T367 3q53 7 100 30t84 59t62 82t33 100q11 69-6 131t-55 114zM325 557q48 0 90-18t74-50t50-74t18-90t-18-90t-50-74t-74-50t-90-18t-90 18t-73 50t-50 74t-18 90t18 90t50 74t73 50t90 18" /></svg>
  )
}

export function Barchart(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path fill="currentColor" fill-rule="evenodd" d="M64 64h64v298.667H64zm106.667 149.333h64v149.334h-64zM448 170.667h-64v192h64zm-170.667-64h64v256h-64zM448 405.333H64V448h384z" clip-rule="evenodd" /></svg>
  )
}

export function TrendingUp(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m3 17l6-6l4 4l8-8" /><path d="M14 7h7v7" /></g></svg>
  )
}

export function Shield(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
  )
}
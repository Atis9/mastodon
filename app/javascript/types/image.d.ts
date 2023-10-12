/* eslint-disable import/no-default-export */
declare module '*.avif' {
  const path: string;
  export default path;
}

declare module '*.gif' {
  const path: string;
  export default path;
}

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.svg' {
  import type React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const path: string;
  export default path;
}

declare module '*.webp' {
  const path: string;
  export default path;
}

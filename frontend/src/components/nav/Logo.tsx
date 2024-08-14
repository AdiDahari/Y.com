import * as React from "react";

const Logo = ({
  width = 24,
  height = 24,
  className,
  color,
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 224 234"
    className={className}
    fill={color}
  >
    <path d="M15.8 19.1c-.3 2.1.1 3.4 1.2 4.2 1.4 1 50.1 48.3 87.6 85.2l9.2 9 34.9-34.2c19.1-18.8 40.9-39.9 48.5-47 12.7-11.9 13.6-13.1 13.7-16.6l.1-3.7h-35.5l-30.7 31.2L114 78.5 82.8 47.2 51.5 16H16.2l-.4 3.1zM15.1 65.5c.1 16.5.4 20.5 1.5 20.5 2.6 0 50.5 47.5 55.4 54.8 5.7 8.6 6 11.2 6 48.4V223h27v-81l-2.5-6.7C99 126.2 97.2 123.9 78 105c-9.3-9.1-26.7-26.3-38.9-38.3C27 54.8 16.6 45 16 45c-.7 0-1 6.7-.9 20.5zM171 84.4c-36.5 36.4-39.8 40-43.5 47.1l-4 7.7-.5 19.2c-.3 10.5-.4 29.3-.2 41.8l.3 22.8H149v-31.9c0-17.5.5-34.2 1-37.2 2-10.3 4.2-13.1 31-40 14-14.1 26.6-26.5 28-27.5l2.5-1.9-.5-19.7-.5-19.8L171 84.4zM157 214.9c-.5 1.1-1 2.6-1 3.4 0 2 3.3 4.7 5.7 4.7 4.1 0 6.9-6 4.1-8.8-2-2-7.6-1.5-8.8.7zm5.1 2c.7-1.1.9-1.1.9.3 0 1.1-.8 1.8-2 1.8-1.1 0-2-.6-2-1.3 0-2.2 1.5-3 1.9-1.1.2 1.4.5 1.4 1.2.3z" />
  </svg>
);
export default Logo;

export interface SocialLink {
    href: string;
    label: string;
    icon: React.ReactNode;
}

export const socialLinks : SocialLink[] = [
    {
      href: "https://github.com/eej-sinining",
      label: "GitHub",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.649.5.5 5.818.5 12.29c0 5.21 3.438 9.626 8.207 11.188.6.11.82-.27.82-.6v-2.16c-3.34.76-4.04-1.66-4.04-1.66-.55-1.44-1.34-1.82-1.34-1.82-1.09-.78.08-.76.08-.76 1.2.1 1.83 1.28 1.83 1.28 1.08 1.92 2.84 1.36 3.53 1.04.1-.8.42-1.36.76-1.67-2.67-.32-5.47-1.4-5.47-6.24 0-1.38.46-2.5 1.22-3.38-.12-.32-.53-1.62.12-3.38 0 0 1-.34 3.3 1.3a10.96 10.96 0 0 1 6 0c2.3-1.64 3.3-1.3 3.3-1.3.65 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.38 0 4.86-2.8 5.92-5.47 6.24.44.4.84 1.17.84 2.37v3.51c0 .33.22.72.83.6 4.77-1.56 8.2-5.97 8.2-11.19C23.5 5.82 18.35.5 12 .5z"/>
        </svg>
      ),
    },
    {
      href: "https://facebook.com/Ephisshy",
      label: "Facebook",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5C10.5 7 12 6 13.9 6c1.1 0 2 .1 2.3.1v2.6h-1.6c-1.2 0-1.5.6-1.5 1.4V12H16l-.4 3h-2.5v7A10 10 0 0 0 22 12"/>
        </svg>
      ),
    },
    {
      href: "mailto:eej.sinining@gmail.com",
      label: "Gmail",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/ean-endrew-jade-sinining-828893337",
      label: "LinkedIn",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3v-12ZM9 8.98h3.8v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.3 0-3-2-3s-2.3 1.5-2.3 2.9v5.7H9v-12Z"/>
        </svg>
      ),
    },
    {
      href: "https://drive.google.com/file/d/1bKwMbw8Wap5YCrNjUclMrfrDJY1qy23D/view?usp=drive_link",
      label: "Resume",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zM13 3.5L18.5 9H13V3.5zM12 12h4v2h-4v-2zm0 4h4v2h-4v-2z" />
        </svg>
      ),
    },
  ];
export interface Certificate {
  name: string;
  year: string;
  issuer: string;
  link: string;
}

export const certificates: Certificate[] = [
  {
    name: "IT Specialist: Databases",
    year: "2025",
    issuer: "Certiport",
    link: "https://drive.google.com/file/d/1eZqqkzeaPgROEEchcBqs0kJDVRE0rBvY/view?usp=drive_link",
  },
  {
    name: "IT Specialist: HTML and CSS",
    year: "2025",
    issuer: "Certiport",
    link: "https://drive.google.com/file/d/1mUVZm1uoK2Xm3-6JDXFNK-zOGcas4x3k/view?usp=drive_link",
  },
  // Add more certificates here...
]

const images = import.meta.glob(
  "../assets/projects/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

export function getProjectImages(projectName:string): string[] {
  return Object.entries(images)
    .filter(([path]) => path.includes(`/projects/${projectName}`))
    .map(([, image]) => image as string);
}
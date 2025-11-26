// Allow importing global CSS files in TypeScript modules
declare module "*.css" {
  const content: string;
  export default content;
}

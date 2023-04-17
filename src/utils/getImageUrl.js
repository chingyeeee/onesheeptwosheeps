export function getImageUrl(folder, path) {
  return new URL(`../assets/images/${folder}/${path}`, import.meta.url).href;
}

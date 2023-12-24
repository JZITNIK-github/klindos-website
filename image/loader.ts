export default function cloudinaryLoader({
  src,
}: {
  src: string
  width: number
  quality?: number
}) {
  return `${src}`
}

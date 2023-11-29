export default function cloudinaryLoader({ src, width, quality }) {
  const params = [
    "f_auto",
    "c_limit",
    "w_" + width,
    "q_" + (quality || "auto"),
  ];
  return `https://res.cloudinary.com/dmwxnrn8o/image/upload/${params.join(
    ","
  )}/hackthespace/${src}.jpg`;
}

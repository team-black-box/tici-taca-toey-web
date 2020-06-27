import Identicon from "identicon.js";

export const generateIdenticon = (name: string) => {
  const nameLength = name.length;
  const key =
    name.length >= 16
      ? name
      : `${name}${"ticitacatoeyhash".substring(0, 16 - nameLength)}`;
  return `data:image/jpeg;base64,${new Identicon(
    new Buffer(key).toString("hex"),
    64
  ).toString()}`;
};

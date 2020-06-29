import Identicon from "identicon.js";

export const generateIdenticon = (name: string, size: number = 64): string => {
  const nameLength = name.length;
  const key =
    name.length >= 16
      ? name
      : `${name}${"ticitacatoeyhash".substring(0, 16 - nameLength)}`;
  return `data:image/jpeg;base64,${new Identicon(
    new Buffer(key).toString("hex"),
    size
  ).toString()}`;
};

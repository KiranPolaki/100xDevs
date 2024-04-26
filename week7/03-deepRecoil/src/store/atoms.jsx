import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 5,
});

export const totalNotification = selector({
  key: "totalNotification",
  value: ({ get }) => {
    const networkAtomCount = get;
  },
});

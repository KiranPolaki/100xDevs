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
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);

    return (
      networkAtomCount +
      jobAtomCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});

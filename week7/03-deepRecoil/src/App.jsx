/* eslint-disable no-unused-vars */
import {
  useRecoilValue,
  RecoilRoot,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./store/atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <Mainapp />
    </RecoilRoot>
  );
}

function Mainapp() {
  const networkCount = useRecoilValue(networkAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  // * Three ways but keep on optimizing it

  // * 1) Not optimal cause not calculating when only the value canges
  // const total = networkCount + messageCount + jobsCount + notificationCount;

  // * 2) Better way to do this is this, but can we do this with recoile.. yes
  // const total = useMemo(() => {
  //   const total = networkCount + messageCount + jobsCount + notificationCount;
  //   return total;
  // }, [networkCount, messageCount, jobsCount, notificationCount]);

  // * 3) We can use Selecter for derived values from the states of recoil

  return (
    <>
      <button>Home</button>

      <button>Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Message ({messageCount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Me ({total})</button>
    </>
  );
}

// * Recoil basics
function App1() {
  return (
    <>
      <RecoilRoot>
        <Buttons />
      </RecoilRoot>
    </>
  );
}

function Buttons() {
  const networkChangeCount = useRecoilValue(networkAtom);
  const jobsChangeCount = useRecoilValue(jobsAtom);
  const messageChangeCount = useRecoilValue(messagingAtom);
  // const [notificationChangeCount, setNotificationChangeCount] =
  //   useRecoilState(notificationAtom);
  const notificationChangeCount = useRecoilValue(notificationAtom);

  return (
    <>
      <button>Home</button>

      <button>
        Network ({networkChangeCount >= 100 ? "99+" : networkChangeCount})
      </button>
      <button>Jobs ({jobsChangeCount})</button>
      <button>Message ({messageChangeCount})</button>
      <button>Notification ({notificationChangeCount})</button>

      <ButtonUpdater />
    </>
  );
}

function ButtonUpdater() {
  const setNotificationChangeCount = useSetRecoilState(notificationAtom);

  return (
    <button
      onClick={() => {
        setNotificationChangeCount((nc) => nc + 1);
      }}
    >
      Me
    </button>
  );
}

export default App;

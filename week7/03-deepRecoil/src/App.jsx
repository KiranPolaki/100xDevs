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

function App() {
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

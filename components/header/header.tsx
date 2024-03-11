import CurrentUser from "../CurrentUser/currentuser";
import Notifications from "../notifications/notifications";
import "./header.scss";

const BASE_CLASS = "header";
export default function Header() {
  return (
    <div className={BASE_CLASS}>
      <Notifications />
      <CurrentUser />
    </div>
  );
}

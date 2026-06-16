import { useLocation } from "react-router";
import Message from "../../components/message/Message";

const HomePage = () => {
  const { state } = useLocation();
  const message =
    state?.from === "complex"
      ? "You should revisit Users' page, Posts' page and Comments' page"
      : "";

  return message ? <Message message={message} /> : null;
};

export default HomePage;

import { type NextPage } from "next";
import Body from "~/components/Body";
import Title from "~/components/Title";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Title />
      <Body />
    </div>
  );
};

export default Home;

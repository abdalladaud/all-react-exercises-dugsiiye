import UserCard from "./components/UserCard";

const App = () => {
  return (
    <>
      <UserCard />

      {/* Exercise#3 - props */}
      <UserCard Username={"Abdalla Daud"} email={"abdalla2@gmail.com"} />

      <UserCard Username={"Aisha Abdalla"} email={"aisha3@gmail.com"} />

      <UserCard Username={"Sofia Mohamed"} email={"sofia4@gmail.com"} />

      <UserCard Username={"Bilan Ali"} email={"bilan1@gmail.com"} />
    </>
  );
};

export default App;

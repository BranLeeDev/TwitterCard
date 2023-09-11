import "./App.css";
import TwitterFollowCard from "./components/TwitterFollowCard";

interface User {
  userName: string;
  name: string;
  initialIsFollowing: boolean;
}

function App() {
  const users: User[] = [
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      initialIsFollowing: true,
    },
    {
      userName: "branleedev",
      name: "Brandon Aguero",
      initialIsFollowing: false,
    },
    {
      userName: "platzi",
      name: "Platzi",
      initialIsFollowing: true,
    },
  ];

  return (
    <>
      <main className="main">
        <h1 className="main__title">Who to follow</h1>
        <ul className="main__list-cards">
          {users.map((user) => (
            <li key={user.userName} className="main__card-item">
              <TwitterFollowCard
                userName={user.userName}
                initialIsFollowing={user.initialIsFollowing}
              >
                {user.name}
              </TwitterFollowCard>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;

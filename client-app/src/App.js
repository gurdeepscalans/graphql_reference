import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import UserTable from "./components/userTable";

const GET_USERS = gql`
  {
    users {
      id
      name
      username
      email
    }
  }
`;

const GET_TEST_DATA = gql`
  {
    test {
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  const testdata = useQuery(GET_TEST_DATA);
  if (error) return <h1>Something went wrong!</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <main className="App">
      <h1>{testdata?.data?.test?.title}</h1>
      <UserTable users={data.users} />
    </main>
  );
}

export default App;

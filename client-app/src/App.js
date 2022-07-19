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

const GET_TITLE_DATA = gql`
  {
    test {
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS); //call user list query
  const testdata = useQuery(GET_TITLE_DATA); //call get title query
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

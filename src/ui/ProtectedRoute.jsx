import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-hrey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authentificated user
  const { isLoading, isAutehnticated } = useUser();

  //3. If there is NO authentificated user, redirect to the /login
  useEffect(
    function () {
      if (!isAutehnticated && !isLoading) navigate("/login");
    },
    [isAutehnticated, isLoading, navigate]
  );

  //2. While loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4. If there IS a user, render the app

  if (isAutehnticated) return children;
}

export default ProtectedRoute;

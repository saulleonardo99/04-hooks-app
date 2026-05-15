import { RouterProvider } from "react-router/dom";
import { appRouter } from "./router/app.router";
import { UserContextProvider } from "./context/UserContext";

export const ProfessionalApp = () => {
  return (
    <div className="bg-gradient">
      <UserContextProvider>
        <RouterProvider  router={appRouter}/>
      </UserContextProvider>
    </div>
  )
}

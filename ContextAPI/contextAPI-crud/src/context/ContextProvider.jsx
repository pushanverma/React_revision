import { AuthProvider } from "./UserAuthContext";
import { EmployeeProvider } from "./EmployeeContext";

export default function ContextProvider({ children }) {
  return (
    <>
     <AuthProvider>
      <EmployeeProvider>{children}</EmployeeProvider>
    </AuthProvider>
    </>
  );
}

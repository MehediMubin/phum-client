import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
   return (
      <ProtectedRoute>
         <MainLayout />
      </ProtectedRoute>
   );
};

export default App;

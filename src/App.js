import NavigationRoutes from "./routing/routes";
import { ImageURLProvider } from "./context/imageURLContext";

function App() {
  return (
    <div>
      <ImageURLProvider>
        <NavigationRoutes />
      </ImageURLProvider>
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <div></div>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App

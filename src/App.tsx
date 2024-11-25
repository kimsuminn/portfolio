import { BrowserRouter } from "react-router-dom";
import { PageLayout } from "./layout/pageLayout";

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

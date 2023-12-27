import Navbar from "./Navbar"
import News from "./pages/News"
import Home from "./pages/Home"
import Quests from "./pages/Quests"
import QuestsPrapor from "./pages/quests/QuestsPrapor"
import QuestsTherapist from "./pages/quests/QuestsTherapist"
import QuestsSkier from "./pages/quests/QuestsSkier"
import QuestsPeacekeeper from "./pages/quests/QuestsPeacekeeper"
import QuestsMechanic from "./pages/quests/QuestsMechanic"
import QuestsRagman from "./pages/quests/QuestsRagman"
import QuestsJaeger from "./pages/quests/QuestsJaeger"
import QuestsFence from "./pages/quests/QuestsFence"
import QuestsLightkeeper from "./pages/quests/QuestsLightkeeper"
import Login from "./pages/Login"
import { Route, Routes } from "react-router-dom"
import Proba_pera from "./pages/quests/prapor/Proba_pera";
import NewsItem from "./pages/news/NewsItem";
import QuestsItem from "./pages/news/QuestsItem";
import Admin from "./pages/Admin";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsItem />} />
          <Route path="/quests/:trader/:id" element={<QuestsItem />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/quests/prapor" element={<QuestsPrapor />} />
          <Route path="/quests/therapist" element={<QuestsTherapist />} />
          <Route path="/quests/skier" element={<QuestsSkier />} />
          <Route path="/quests/peacekeeper" element={<QuestsPeacekeeper />} />
          <Route path="/quests/mechanic" element={<QuestsMechanic />} />
          <Route path="/quests/ragman" element={<QuestsRagman />} />
          <Route path="/quests/jaeger" element={<QuestsJaeger />} />
          <Route path="/quests/fence" element={<QuestsFence />} />
          <Route path="/quests/lightkeeper" element={<QuestsLightkeeper />} />
          <Route path="/quests/prapor/proba_pera" element={<Proba_pera />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
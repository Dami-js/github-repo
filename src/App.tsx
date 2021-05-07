import { Tab } from "components/AppTabs";
import Container from "components/Container";
import Filter from "components/Filter";
import Img from "components/Img";
import ProfileSection from "components/ProfileSection";
import RepoList from "components/RepoList";
import StickyHeader from "components/StickyHeader";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [showName, setShowName] = useState(false);
  return (
    <div className="">
      <Navbar />
      <div className="pt-7  hidden md:block ">
        <StickyHeader>
          <div className="bg-white border-b">
            <Container>
              <div className="flex items-center">
                {showName && (
                  <div className="flex items-center">
                    <Img src="/dami.png" size="8" />
                    <p className="font-semibold text-gray-800 ml-2">Dami-js</p>
                  </div>
                )}
                <div className="md:w-3/4 ml-auto pl-7">
                  <Tab />
                </div>
              </div>
            </Container>
          </div>
        </StickyHeader>
      </div>
      <Container>
        <div className="md:flex">
          <div className="md:w-1/4">
            <ProfileSection setShowName={setShowName} />
          </div>

          <div className="-mx-3.5 px-3.5 mt-10 md:hidden">
            <StickyHeader>
              <div className="bg-white border-b">
                <div className="ml-auto">
                  <Tab />
                </div>
              </div>
            </StickyHeader>
          </div>
          <div className="md:w-3/4 md:pl-8">
            {/* filter section */}
            <div className="border-b py-4">
              <Filter />
            </div>
            {/* Repo list */}
            <div className="">
              <RepoList />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;

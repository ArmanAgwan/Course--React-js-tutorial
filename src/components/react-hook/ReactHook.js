import React, { Component } from "react";
import LifecycleA from "./LifecycleA";
import Form from "./Form";
import ParentComp from "./ParentComp";
import RefsDemo from "./RefsDemo";
import FocusInput from "./FocusInput";
import FRParentInput from "./FRParentInput";
import PortalDemo from "./PortalDemo";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import ClickCounterTwo from "./ClickCounterTwo";

class ReactHook extends Component {
  render() {
    return (
      <div className="App">
        {/* <ErrorBoundary> */}
        {/* <Hero heroName="Batman" />
              <Hero heroName="Superman" />
              <Hero heroName="Joker" /> */}
        {/* </ErrorBoundary>   */}
        <ClickCounter />
        {/* <HoverCounter /> */}
        {/* <ClickCounterTwo /> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
      </div>
    );
  }
}

export default ReactHook;

"use client";

import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import Navigation from "@/components/Navigation";
import Map from "../components/Map";

const engine = new Styletron();

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const NavigationWrapper = styled("div", {
  flex: "0 1 auto",
});

const MapWrapper = styled("div", {
  flex: "1 1 auto",
});

export default function Home() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Container>
          <NavigationWrapper>
            <Navigation />
          </NavigationWrapper>
          <MapWrapper>
            <Map />
          </MapWrapper>
        </Container>
      </BaseProvider>
    </StyletronProvider>
  );
}
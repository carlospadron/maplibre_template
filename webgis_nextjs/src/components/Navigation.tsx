"use client";

import * as React from "react";
import {
  BottomNavigation,
  NavItem
} from "baseui/bottom-navigation";
import { Calendar, Search, Show } from "baseui/icon";

export default () => {
  const [activeKey, setActiveKey] = React.useState(0);
  return (
    <BottomNavigation
      activeKey={activeKey}
      onChange={({ activeKey }) => {
        setActiveKey(activeKey);
      }}
    >
      <NavItem title="First" icon={Calendar}>
        <h1>First page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
          libero tempore, cum soluta nobis est eligendi
          optio.
        </p>
      </NavItem>
      <NavItem title="Second" icon={Search}>
        <h1>Second page</h1>
        <p>
          At vero eos et accusamus et iusto odio
          dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati.
        </p>
      </NavItem>
      <NavItem title="Third" icon={Show}>
        <h1>Third page</h1>
        <p>
          Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores
          alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
      </NavItem>
    </BottomNavigation>
  );
}
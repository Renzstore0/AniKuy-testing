"use client";

import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";

export default function AppShell({
  children,
  page,
  headerProps = {},
  showBottomNav = true
}) {
  return (
    <div className="app-root">
      <AppHeader {...headerProps} />
      <main id="mainContent">
        <div className="page-container">{children}</div>
      </main>
      {showBottomNav && <BottomNav active={page} />}
    </div>
  );
}

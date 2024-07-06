import React from "react";
import { mount } from "auth/authIndex";
import { useRef } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AuthApp({ onSignIn }) {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}

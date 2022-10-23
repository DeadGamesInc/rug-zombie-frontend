/* eslint-disable no-param-reassign */
import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";



const Zom: React.FC = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "unity-build/zom.loader.js",
    dataUrl: "unity-build/zom.data",
    frameworkUrl: "unity-build/zom.framework.js",
    codeUrl: "unity-build/zom.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default Zom

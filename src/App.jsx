import React, { useEffect, useState } from 'react';
import { BN_COPY } from './translations.js';


  },[path]);
  return <div className="app-shell"><div className="scroll-progress" aria-hidden="true"/><IntroGate/><Header theme={theme} setTheme={setTheme} lang={lang} setLang={setLang}/>{path==='/'?<Home lang={lang}/>:<GenericPage path={path} lang={lang}/>}<Footer lang={lang}/></div>;
}
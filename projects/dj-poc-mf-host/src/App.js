import React from 'react';

const SomeWidget = React.lazy(() => import('poc_lib/some-widget'));

function App() {
  return (
    <div>
      <h1>Module Federation POC - host header</h1>
      <div>
        <h3>Component imported from federated module library:</h3>
        <React.Suspense fallback='Loading federated module component...'>
          <SomeWidget />
        </React.Suspense>
      </div>
      <h2>This header is part of the host App</h2>
    </div>
  );
}

export default App;

"use client";

import Button from "./_components/Button";

function error({ error, reset }) {
  return (
    <div className="-mt-20 flex h-screen flex-col items-center justify-center">
      <h1 className="text-primary text-4xl">Something went wrong</h1>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}

export default error;

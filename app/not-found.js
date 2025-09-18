import Button from "./_components/Button";

function notFound() {
  return (
    <div className="-mt-20 flex h-screen flex-col items-center justify-center">
      <h1 className="text-primary text-4xl">Page Not Found</h1>
      <Button href="/">Go To Home</Button>
    </div>
  );
}

export default notFound;

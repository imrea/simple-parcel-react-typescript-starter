import Logo from './logo.svg';

export function App() {
  return (
    <h1 className="flex items-center justify-center my-4 text-4xl">
      <img alt="logo" src={Logo} className="inline-block w-16 h-16" />
      <div>
        Hello <span className="font-bold">Parcel</span>!
      </div>
    </h1>
  );
}

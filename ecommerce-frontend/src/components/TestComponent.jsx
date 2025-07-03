export default function TestComponent() {
  return (
    <div className="hidden md:flex bg-red-500">
      This should only appear on medium and larger screens.
    </div>
  );
}

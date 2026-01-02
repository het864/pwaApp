export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow text-center">
        <h2 className="text-xl font-semibold mb-2">You’re Offline</h2>
        <p className="text-gray-600">
          This content is not available offline.
          Please reconnect to the internet.
        </p>
      </div>
    </div>
  );
}

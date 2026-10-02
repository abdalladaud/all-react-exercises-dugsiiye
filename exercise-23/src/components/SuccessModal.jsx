function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✓
        </div>

        <h2 className="mb-2 text-2xl font-bold text-slate-800">
          Application Submitted!
        </h2>

        <p className="mb-6 text-slate-500">
          Thank you for applying. Your application has been received
          successfully.
        </p>

        <button
          onClick={onClose}
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
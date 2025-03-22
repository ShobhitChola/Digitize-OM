"use client";

export default function EmailPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pointer-events-auto backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-4 right-5 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-4">Stay updated with our latest news and offers!</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded-2xl mb-4"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded-full font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
}

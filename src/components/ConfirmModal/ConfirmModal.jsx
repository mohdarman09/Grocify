import React from "react";

const ConfirmModal = ({ open, onClose, onConfirm, title, message, confirmText }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">{title || "Are you sure?"}</h2>
        <p className="mb-6">{message || "Do you want to continue?"}</p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={onConfirm}
          >
            {confirmText || "Yes"}
          </button>
          <button
            className="bg-gray-300 text-zinc-800 px-4 py-2 rounded cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
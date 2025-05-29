import React from 'react'

const Popup = ({ onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg text-black">
                    <h2 className="text-xl font-bold mb-4">This is a popup!</h2>
                    <button onClick={onClose} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                </div>
            </div>
        </motion.div>
    )
}

export default Popup

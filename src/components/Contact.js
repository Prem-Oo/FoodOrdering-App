const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-4">We'd love to hear from you. Please get in touch with any questions or feedback.</p>
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 rounded-md border border-gray-300 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 rounded-md border border-gray-300 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="mt-1 p-2 rounded-md border border-gray-300 w-full"
                            rows="4"
                        ></textarea>
                    </div>
                    <button onClick={(e) => e.preventDefault()} className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

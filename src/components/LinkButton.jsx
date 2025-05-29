const LinkButton = ({ href, children }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
            {children}
        </a>
    );
};

export default LinkButton;
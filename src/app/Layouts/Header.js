export default function Header() {
    return (
        <div>
            <div className="logo-svg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                >
                    <g fill="none" fillRule="evenodd">
                        <path
                            fill="#4A4AE5"
                            d="M2.577 10.006L13.998 10.013 14.005 21.638 2.584 21.631z"
                            transform="rotate(-45 8.29 15.822)"
                        />
                        <path
                            fill="#4A77E5"
                            d="M18.337 -0.692L29.758 -0.699 29.737 32.749 18.316 32.756z"
                            transform="rotate(45 24.037 16.028)"
                        />
                    </g>
                </svg>
            </div>
            <p className="todo-title">Todo List</p>
        </div>
    );
}
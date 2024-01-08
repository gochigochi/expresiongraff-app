
const PrimaryButton = ({ children, action, ...props }) => {
    return (
        <button 
            className="bg-slate-800 px-5 py-3 text-white rounded-full tracking-widest"
            onClick={action}
            {...props}
        >
            {children}
        </button>
    )
}

export default PrimaryButton
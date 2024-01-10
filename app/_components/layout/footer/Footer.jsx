const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <footer className="w-full mt-2">
            <div className="flex h-5 max-w-screen-xl mx-auto px-5 justify-end">
                <p className="text-xs">&#169; Expresiongraff, {date} by diegoui.</p>
            </div>
        </footer>
    )
}

export default Footer
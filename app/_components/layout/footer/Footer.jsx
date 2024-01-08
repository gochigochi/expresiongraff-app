const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <footer className="w-full px-5">
            <div className="flex h-8 max-w-screen-xl mx-auto justify-end">
                <p>&#169; Expresiongraff, {date}. By Go.</p>
            </div>
        </footer>
    )
}

export default Footer
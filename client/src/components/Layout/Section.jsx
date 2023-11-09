const Section = ({children, className}) => {
    return (
        <div className={`p-8 max-w-[1200px] mx-auto ${className}`}>
            {children}
        </div>
    );
}

export default Section
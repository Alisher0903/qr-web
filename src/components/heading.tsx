const Heading = ({text}: { text: string }) => {
    return (
        <h1 className={`lg:text-7xl md:text-5xl text-3xl leading-10 text-darkBlue tracking-wide font-bold`}>
            {text}
        </h1>
    );
};

export default Heading;

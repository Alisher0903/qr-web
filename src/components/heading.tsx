const Heading = ({text}: { text: string }) => {
    return (
        <h1 className={`lg:text-5xl md:text-3xl text-xl leading-10 text-darkBlue tracking-wide font-bold`}>
            {text}
        </h1>
    );
};

export default Heading;

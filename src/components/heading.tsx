const Heading = ({text, size}: { text: string, size?: string }) => {
    return (
        <h1 className={`${size ? size : 'lg:text-6xl'} md:text-5xl text-3xl ${size ? 'leading-7' : 'leading-10'} text-darkBlue tracking-wide font-bold`}>
            {text}
        </h1>
    );
};

export default Heading;

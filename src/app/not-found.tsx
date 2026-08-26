import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex place-content-center items-center">
            {/* BOOORING, lemme show memes pls 
        <h2>404 Not Found</h2>
        <p>The website you were looking for was not found.</p> */}
            <img
                src="/404.png"
                alt="404 Not found"
                // className="object-cover"
                width="500px"
                height="500px"
            />
        </div>
    );
}

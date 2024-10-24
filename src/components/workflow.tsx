import Image from "next/image";
import flowchart from "../../public/img/home/flowchart.png";

export default function Timeline() {
    return (
        <div className="w-full">
            <Image
                src={flowchart}
                layout="responsive" // Ensures the image is responsive
                width={1000} // Use any height for aspect ratio (e.g., 400)
                alt="Flowchart"
                placeholder="blur" // Optional for a blur effect while loading
            />
        </div>
    );
}

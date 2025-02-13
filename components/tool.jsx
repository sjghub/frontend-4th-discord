import Image from "next/image";

export function Tool({src,alt}){

    return (
        <button className={""}>
            <Image src={src} alt={"alt"} width={24} height={24} />
        </button>
    )
}
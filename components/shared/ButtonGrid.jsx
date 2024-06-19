import Link from "next/link";
import Image from "next/image";

export const ButtonGrid1 = (href, Text) => {
    return(
        <>
        <Link href={href} className='text-white bg-primHov font-medium rounded-xl text-lg px-10 py-2.5 hover:opacity-95'>{Text}</Link>
        </>
    )
}

export const ButtonGrid2 = (href, Text) => {
    return(
        <>
        <Link href={href} target="_blank" className='flex items-center text-prim border-spacing-1 focus:ring-4 focus:outline-none focus:primHov font-medium rounded text-lg px-6 py-2.5 text-center'>
        <Image className="mr-1" src={"/images/hero/playVid.png"} alt="Play Icon Image" width={20} height={20}/>
          {Text}</Link>
        </>
    )
}

export const submitBtn = (Text) => {
    return(
        <>
        
        <button type="submit" className='text-white bg-primHov font-medium rounded-xl text-center mt-4 w-full py-2.5 hover:opacity-95'>{Text}</button>
        </>
    )
}
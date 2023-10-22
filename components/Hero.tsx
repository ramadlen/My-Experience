import Image  from "next/image"

export default function Hero() {
    return (
        <div className="relative min-h-[274px] w-full flex-col lg:h-80">
            <div className="absolute inset-0">
                <Image
                    src="/ok.webp"
                    alt="background image"
                    sizes="100vw"
                    style={{
                        width: '100vw',
                        height: '400px',
                    }}
                    width={500}
                    height={500}
                />
            </div>
            
       </div>
                
           
    );
}

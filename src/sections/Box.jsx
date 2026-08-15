import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { fraunces } from "../app/layout";
const BoxData = [
    {
        key: 1,
        image: "https://cdn-icons-png.flaticon.com/128/3145/3145765.png",
        heading: "Read for shine",
        description: "Read book for gain knowladge"
    },
    {
        key: 2,
        image: "https://cdn-icons-png.flaticon.com/512/718/718970.png",
        heading: "Read for shine",
        description: "Read book for gain knowladge"
    },
    {
        key: 3,
        image: "https://cdn-icons-png.flaticon.com/512/3938/3938619.png",
        heading: "comics",
        description: "A lots of comics for your entetainment"
    },
    {
        key: 4,
        image: "https://cdn-icons-png.flaticon.com/512/2387/2387613.png",
        heading: "Novel",
        description: "Romantic novel for adults"
    },
    {
        key: 5,
        image: "https://cdn-icons-png.flaticon.com/128/2400/2400603.png",
        heading: "Art",
        description: "Read book for gain knowladge"
    },
    {
        key: 6,
        image: "https://cdn-icons-png.flaticon.com/512/3938/3938619.png",
        heading: "comics",
        description: "A lots of comics for your entetainment"
    },
    {
        key: 7,
        image: "https://cdn-icons-png.flaticon.com/512/2387/2387613.png",
        heading: "Novel",
        description: "Romantic novel for adults"
    },
]
const Box = () => {
    return (
        <>
            <div className="container user-none mx-auto mt-3">
                <Carousel className={'p-3'}>
                    <h2 className={`font-bold text-3xl ${fraunces.className} `}>Feature Categories</h2>

                    <CarouselContent>
                        {
                            BoxData.map(data => {
                                return (
                                    <CarouselItem className={' basis-1/3 lg:basis-1/5 space-x-3 w-full'} key={data.key}>
                                        <div className="p-2">
                                            <Card
                                                className={' text-center h-40 w-60 '}
                                            >
                                                <CardHeader
                                                    className={'flex justify-center flex-col items-center'}
                                                >
                                                    <div>
                                                        <Image src={data.image} alt="book open" height={"25"} width={"25"} />
                                                    </div>

                                                    <h1 className="font-bold">{data.heading}</h1>
                                                </CardHeader>
                                                <CardContent className={''}>
                                                    <CardDescription> {data.description} </CardDescription>
                                                </CardContent>
                                            </Card>
                                        </div>

                                    </CarouselItem>
                                )
                            })
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
};

export default Box;
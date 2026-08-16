import Box from "../sections/Box";
import BrowseCategorySection from "../sections/BrowseCategorySection";
import Draft from "../sections/Draft";
import FeaturedBooksSection from "../sections/FeaturedBooksSection";
import Hero from "../sections/Hero";
import PricingSection from "../sections/PricingSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import WhyChooseSection from "../sections/WhyChooseSection";

export default function Home() {
    console.log(process.env.NEXT_PUBLIC_TEST);
    
    return (
        <>
            <Hero />
            {/* <Box /> */}
            <WhyChooseSection />
            <FeaturedBooksSection />
            <BrowseCategorySection />
            <TestimonialsSection />
            <PricingSection />

        </>
    )
}

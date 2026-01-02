import QuoteCard from "@/components/QuoteCard";

export const metadata={
  title:'Quote of the day',
  description:'Gives out quote for each day'
}

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white text-black">
      <QuoteCard/>
    </div>
  );
}

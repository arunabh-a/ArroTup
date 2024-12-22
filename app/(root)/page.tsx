import Image from "next/image";
import SearchForm from "@/components/searchForm";
import StartupCard from "@/components/startupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string}>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 100,
    author: {
      _id: 1,
      name: 'Arunabh Bhattacharya'
    },
    _id: 1,
    description: 'Not Possibleeeeee',
    image: 'https://thumbs.dreamstime.com/b/cat-rapper-boss-gangsta-style-gold-chains-concept-thug-life-generative-ai-illustration-cat-rapper-boss-gangsta-style-271323923.jpg',
    category: 'Technology',
    title: 'Ladies Technology',
  },
  ]

  return (
      <>
        <section className="pink_container">
          <h1 className="heading">Pitch your Imagination, Connect with Dreamers</h1>
          <p className="sub-heading !max-w-3xl">Submit Ideas and Get Noticed </p>
          <SearchForm query={query}/>
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Search results for "${query}"` : "All Startups"}
          </p>
          <ul className="mt-7 card-grid">
            {posts ?. length > 0 ? (
                posts.map((post: StartupCardType, index: number) => (
                    <StartupCard key={post?._id} post={post}/>
                ))
            ) : (
                <p className='no-results'>No Startups found</p>
            )}
          </ul>
        </section>
      </>
  );
}

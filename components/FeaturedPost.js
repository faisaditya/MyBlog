import InfoPost from "@components/InfoPost";
import Link from "next/link";

export default function FeaturedPost() {
    return (
        <article>
            <div className='flex -mx-4 lg:items-center items-start flex-wrap'>
                <div className='lg:w-8/12 md:w-7/12 w-full px-4'>
                    <Link href="/detail">
                        <a><img src="/featured-thumbnail.png" alt="thumbnail" className='rounded-xl w-full mb-4 md:mb-0' /></a>
                    </Link>
                </div>
                <div className='lg:w-4/12 md:w-5/12 w-full px-4'>
                    <InfoPost
                        category="UI Design"
                        date="10 February 2022"
                        title="Modi consectetur reiciendis nulla iusto nisi laudantium saepe, facilis pariatur"
                        shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa, rem quo accusantium ipsa nostrum veritatis explicabo asperiores beatae voluptates possimus autem ad"
                        authorAvatar="/author.png"
                        authorName="Alex Lauren"
                        authorJob="UI Designer"
                    />
                </div>
            </div>
            <hr className="border-white/10 mt-10 md:hidden" />
        </article>
    )
}
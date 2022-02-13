import Container from "@components/Container";
import Layout from "@components/Layout";
import PostAuthor from "@components/PostAuthor";
import PostMetaTitle from "@components/PostMetaTitle";
import Head from "next/head";

export default function Detail() {
    return (
        <Layout>
            <Head>
                <title>Detail &mdash; MyBlog</title>
            </Head>
            <Container>
                <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
                    <PostMetaTitle
                        category="UI Design"
                        date="10 February 2022"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        center
                    />
                    <PostAuthor
                        authorName="Alex Lauren"
                        authorAvatar="/author.png"
                        authorJob="UI Designer"
                    />
                </div>
                <div className="md:w-10/12 w-full mx-auto my-10">
                    <img src="/detail-image.png" className="w-full rounded-lg" />
                </div>
                <div className="md:w-8/12 w-full mx-auto leading-relaxed">
                    <p className="text-xl mb-4">
                        Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also theyre their brought seas isnt, to day from bearing grass third midst after beginning man which youre. Dry, gathering beginning given made them evening.
                    </p>
                    <p className="mb-4">
                        Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Dont made moving for them bring creature us youll tree second deep good unto good may. Us yielding.
                    </p>
                    <p>
                        Have. Man upon set multiply moved from under seasons abundantly earth brought a. Theyre open moved years saw isnt morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place wont and him Third fourth moving him whales behold. Beast second stars lights great was dont green give subdue his. Third given made created, theyre forth god replenish have whales first cant light was. Herb youll them beast kind divided. Were beginning fly air multiply god Yielding sea dont were forth.
                    </p>
                </div>
            </Container>
        </Layout>
    )
}
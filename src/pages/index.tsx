import Head from 'next/head'
import { GetStaticProps } from 'next'
import Layout, { siteTitle } from 'shared/components/layout'
import utilStyles from '../shared/styles/utils.module.css'
import Link from 'next/link'
import Date from '../shared/components/date'

type HomeProps = {
  allPostsData: object;
};

export default function Home({ allPostsData  }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  const allPostsData = [] //getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

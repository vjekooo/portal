import * as React from 'react'
import { graphql, Link, type HeadFC, type PageProps } from 'gatsby'
import { Hero } from '../components/Hero'
import { Header } from '../components/Header'
import { Card } from '../components/Card'

interface PageData {
  allContentfulPage: {
    nodes: {
      recentArticles: any
      slug: string
      title: string
      description?: string
    }[]
  }
  featuredArticles: {
    nodes: {
      image: any
      slug: string
      title: string
      date: string
      excerpt?: string
    }[]
  }
}

export default function HomePage({ data }: PageProps<PageData>) {
  const pages = data.allContentfulPage.nodes
  const featuredArticles = data.featuredArticles.nodes

  const heroArticles = featuredArticles.map((article) => ({
    title: article.title,
    url: article.slug,
    date: article.date,
    image: article.image?.file?.url?.startsWith('//')
      ? `https:${article.image.file.url}`
      : article.image?.file?.url || '',
  }))

  return (
    <main>
      {/*<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">*/}
      {/*<div class="order-2 md:order-3 flex items-center" id="nav-content">*/}
      {/*  <a class="inline-block no-underline hover:text-black" href="#">*/}
      {/*    <svg*/}
      {/*      class="fill-current hover:text-black"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      width="24"*/}
      {/*      height="24"*/}
      {/*      viewBox="0 0 24 24"*/}
      {/*    >*/}
      {/*      <circle fill="none" cx="12" cy="7" r="3" />*/}
      {/*      <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />*/}
      {/*    </svg>*/}
      {/*  </a>*/}

      {/*  <a class="pl-3 inline-block no-underline hover:text-black" href="#">*/}
      {/*    <svg*/}
      {/*      class="fill-current hover:text-black"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      width="24"*/}
      {/*      height="24"*/}
      {/*      viewBox="0 0 24 24"*/}
      {/*    >*/}
      {/*      <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />*/}
      {/*      <circle cx="10.5" cy="18.5" r="1.5" />*/}
      {/*      <circle cx="17.5" cy="18.5" r="1.5" />*/}
      {/*    </svg>*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*</div>*/}
      <div
        className="carousel relative container mx-auto flex items-center flex-wrap pb-12"
        style={{ maxWidth: '1600px' }}
      >
        <Header />
        <Hero items={heroArticles} />
      </div>

      {/*single hero*/}

      {/*<section class="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right" style="max-width:1600px; height: 32rem; background-image: url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');">*/}

      {/*  <div class="container mx-auto">*/}

      {/*    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">*/}
      {/*      <h1 class="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</h1>*/}
      {/*      <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">products</a>*/}

      {/*    </div>*/}

      {/*    </div>*/}

      {/*</section>*/}

      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            {pages.map((page) => (
              <div className="w-full flex flex-col">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                  <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                    <a href={page.slug}>{page.title}</a>
                  </div>
                </div>
                <div
                  className="w-full flex-grow sm:flex sm:items-center sm:w-auto"
                  id="store-nav-content"
                >
                  {page?.recentArticles?.map((article: any) => (
                    <Card
                      article={{
                        title: article.title,
                        url: article.slug,
                        date: article.date,
                        image: article.image?.file?.url?.startsWith('//')
                          ? `https:${article.image.file.url}`
                          : article.image?.file?.url || '',
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          {/*<a*/}
          {/*  className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"*/}
          {/*  href="#"*/}
          {/*>*/}
          {/*  About*/}
          {/*</a>*/}

          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a>{' '}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vel risus commodo viverra maecenas accumsan
            lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit.
            Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in
            nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam
            vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget
            mi proin sed libero enim sed faucibus turpis in. Hac habitasse
            platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel
            facilisis volutpat est velit egestas dui id. At tempor commodo
            ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae
            congue eu consequat ac.
          </p>
        </div>
      </section>

      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
              <div className="px-3 md:px-0">
                <h3 className="text-left font-bold text-gray-900">Social</h3>

                <div className="w-full flex items-center py-4 mt-0">
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
  query GetLandingPageData {
    allContentfulPage {
      nodes {
        slug
        title
        recentArticles(limit: 3) {
          slug
          title
          image {
            file {
              url
            }
          }
        }
      }
    }
    featuredArticles: allContentfulArticle(limit: 3, sort: { date: DESC }) {
      nodes {
        slug
        title
        image {
          file {
            url
          }
        }
        date
        excerpt: text {
          raw
        }
      }
    }
  }
`

import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { Hero } from '../components/Hero'
import { Header } from '../components/Header'

const links = [
  {
    text: 'Stanovanje',
    url: '/living',
  },
  {
    text: 'Arhitektura',
    url: '/arhitecture',
  },
  {
    text: 'Dizajn',
    url: '/design',
  },
  {
    text: 'Trend',
    url: '/trend',
  },
]

const heroItems = [
  {
    text: 'Stanovanje',
    url: '/living',
    image:
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80',
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
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
        class="carousel relative container mx-auto"
        style={{ maxWidth: '1600px' }}
      >
        <Hero items={heroItems} />
      </div>

      {/*Alternatively if you want to just have a single hero*/}

      {/*<section class="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right" style="max-width:1600px; height: 32rem; background-image: url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80');">*/}

      {/*  <div class="container mx-auto">*/}

      {/*    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">*/}
      {/*      <h1 class="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</h1>*/}
      {/*      <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">products</a>*/}

      {/*    </div>*/}

      {/*    </div>*/}

      {/*</section>*/}

      <section class="bg-white py-8">
        <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <nav id="store" class="w-full z-30 top-0 px-6 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                href="#"
              >
                Kategorija
              </a>

              <div class="flex items-center" id="store-nav-content">
                <a
                  class="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    class="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>

                <a
                  class="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    class="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>

          <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img
                class="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div class="pt-3 flex items-center justify-between">
                <p class="">Nesto</p>
                <svg
                  class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
              {/*<p class="pt-1 text-gray-900">£9.99</p>*/}
            </a>
          </div>

          <div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
            <a href="#">
              <img
                class="hover:grow hover:shadow-lg"
                src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              />
              <div class="pt-3 flex items-center justify-between">
                <p class="">Nesto</p>
                <svg
                  class="h-6 w-6 fill-current text-gray-500 hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                </svg>
              </div>
              {/*<p class="pt-1 text-gray-900">£9.99</p>*/}
            </a>
          </div>
        </div>
      </section>

      <section class="bg-white py-8">
        <div class="container py-8 px-6 mx-auto">
          <a
            class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
            href="#"
          >
            About
          </a>

          <p class="mb-8">
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

      <footer class="container mx-auto bg-white py-8 border-t border-gray-400">
        <div class="container flex px-3 py-8 ">
          <div class="w-full mx-auto flex flex-wrap">
            <div class="flex w-full lg:w-1/2 ">
              <div class="px-3 md:px-0">
                <h3 class="font-bold text-gray-900">About</h3>
                <p class="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
              <div class="px-3 md:px-0">
                <h3 class="text-left font-bold text-gray-900">Social</h3>

                <div class="w-full flex items-center py-4 mt-0">
                  <a href="#" class="mx-2">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                  <a href="#" class="mx-2">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </a>
                  <a href="#" class="mx-2">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                    </svg>
                  </a>
                  <a href="#" class="mx-2">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
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

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

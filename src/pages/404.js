import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
        <section className='-mt-[5.375rem] pt-32 pb-20 min-h-[65vh] bg-gradient-to-br from-sky-400/50 via-rose-400/50 to-lime-400/50'>
        
        <div className="section box-shadow mx-auto py-[6rem] max-h-[10rem] bg-white max-w-7xl">
          <div className="max-w-5xl mx-auto article-header has-text-centered">
            <h1 className="text-cyan-700">Page Not Found</h1>
           
            <hr />
          </div>
            <main className="max-w-5xl mx-auto content-container">
              Please choose a link from the menu for menu droptown.
              <br/>
              If you have further issues, you can contact the site admin <a href='help@bradstock.org'>here</a>.
            </main>
          </div>
        </section>
      </Layout>
)

export default NotFoundPage

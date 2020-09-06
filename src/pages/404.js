import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className="main wrap md">
      <main>
        <h1 id="title">Not found</h1>
        <p>
          Bummer! This page doesn't exist. Go <Link to="/">back home</Link>.
        </p>
      </main>
    </main>
  </Layout>
)

export default NotFoundPage
